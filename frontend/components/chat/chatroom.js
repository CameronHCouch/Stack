import React from "react";
import MessageForm from "./message_form";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  };

  componentDidMount() {
    const channelId = this.props.selectedChannel.id;
    this.props.requestUsers();
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
  };

  componentDidUpdate(prevProps) {
    const channelId = this.props.selectedChannel.id
    document.getElementById('bottom').scrollIntoView();
    if (channelId && (prevProps.selectedChannel.id !== channelId)){
      this.subscription.unsubscribe();
      this.subscription.load({ channelId });
    };
  };

  componentWillUnmount(){
    this.subscription.unsubscribe();
  };

  render() {
    const messageList = this.state.messages.map((message, idx) => {
      return (
        <li 
        className="message-wrapper"
        key={idx}>
        <div className="the-whole-message">
          <img src={this.props.users[message.author_id].img_url} onClick={this.props.displayDMInvitePopup()} />
          <div className="message">
            <span className="message-user-info">
            <strong>{this.props.users[message.author_id].username}</strong>
            <span className="message-time"> {message.created_at.slice(11, 16)}</span>
            </span>
            <span className="message-body">{message.body}</span>
          </div>
        </div>
        </li>
      );
    });

    return (
      <div className="chatroom-container">
        <div className="message-list-wrapper">
            <div className="message-list">{this.props.users? messageList : {}}</div>
          <div id="bottom" />
        </div>
          <MessageForm 
          currentUser={this.props.currentUser}
          selectedChannel={this.props.selectedChannel} 
          currentChannel={this.props.selectedChannel.id} 
          subscription={this.subscription}
          />
      </div>
    );
  };
};

export default ChatRoom;