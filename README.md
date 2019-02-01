# Stack


![Stack Logo](https://s3.us-east-2.amazonaws.com/couchstack/logo_text_recolor.png)

Visit [Stack](https://couch-stack.herokuapp.com/#/)!

## About Stack
Stack is a Slack clone, a workplace messaging app that brings teams together. On Stack, team members can instantly message one another, keeping everyone on the same page. Creating new channels and private conversations keeps chat separated by topic, allowing everyone to focus on what's most important to them.

### Technologies
Stack was created using *React-Redux* for the frontend and *Rails* for backend. Messages are sent and received in real-time, using *Websockets* through Rails' built-in *Action Cable* feature.

![Stack Splash Page](https://s3.us-east-2.amazonaws.com/couchstack/splash_screenshot.png)

## Features

### Live Chat

```javascript
// frontend/components/chat/chatroom.js

  componentDidMount() {
    const channelId = this.props.selectedChannel.id;
    this.subscription = App.cable.subscriptions.subscriptions.find((subscription) => (
      subscription.identifier === `{"channel":"ChatChannel","channelId":"${channelId}"}`
    ));

    if (this.subscription){
      this.subscription.load({ channelId })
    } else {
      this.subscription = App.cable.subscriptions.create(
        { channel: "ChatChannel", channelId },
        {
          received: data => {
            switch (data.type) {
              case "message":
                this.setState({
                  messages: this.state.messages.concat(data.message)
                });
                break;
              case "messages":
                this.setState({ messages: data.messages });
                break;
            }
          },
          speak: function (data) { return this.perform("speak", data) },
          load: function (data) { return this.perform("load", data) }
        }
      );
    };
    this.props.requestUsers();
    this.subscription.load({ channelId });
  };
```

When the chatroom React component mounts, Action Cable creates a subscription for the currently selected channel & loads the relevant messages. When a user sends a single message to the chat, this message is concatenated to the channel's list of messages.

```javascript
  componentDidUpdate(prevProps) {
    const channelId = this.props.selectedChannel.id
    document.getElementById('bottom').scrollIntoView();
    if (channelId && (prevProps.selectedChannel.id !== channelId)){
      this.subscription.unsubscribe();
      this.subscription.load({ channelId });
    };
  };
```

This subscription changes when the user selects another channel from the left sidebar -- they are unsubscribed from the previous channel and load the new channel.

```ruby
# app/controllers/api/channels_controller.rb
def create
    @channel = Channel.new(channel_params)
    # ...

    if @channel.save
      Subscription.create!(user_id: current_user.id, subscribable: @channel)
      if params[:channel][:member_list].length
        invites = params[:channel][:member_list].split(" ")
        invites.each do |username|
          invited_user = User.find_by(username: username)
          Subscription.create!(user_id: invited_user.id, subscribable: @channel)
        end
      end
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end
```

When creating (or updating) a new channel, users can invite other workspace members to this channel. The Channels Controller handles this by splitting a string and creating new Subscriptions for each invited member. 

The Subscription#create method also shows the polymorphic 'subscribable' association. Using this single Subscription table, users can join either a Workspace or a Channel under the key of 'subscribable' pointing to the desired channel or workspace.

## Future Directions

* Existing channel search + join
* User search feature
* User profile edit & custom avatars
* Message reactions & custom react emojis