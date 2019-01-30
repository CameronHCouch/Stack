import React from "react";
import MessageForm from "./message_form";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.subscription = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
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
        load: function () { return this.perform("load") }
      }
    );
    this.props.requestUsers();
  }

  loadChat(e) {
    e.preventDefault();
    this.subscription.load();
  }

  componentDidUpdate() {
    // this.bottom.current.scrollIntoView();
  }

  render() {
    const messageList = this.state.messages.map((message, idx) => {
      return (
        <li 
        className="message-wrapper"
        key={idx}>
        <div className="the-whole-message">
          <img src={`https://s3.us-east-2.amazonaws.com/couchstack/avatar${Math.ceil(Math.random() * Math.ceil(5))}.png`} />
          <div className="message">
            <span className="message-user-info"><strong>{this.props.users[message.author_id].username}</strong>  <span className="message-time">{message.created_at.slice(11, 19)}</span></span>
            <span className="message-body">{message.body}</span>
          </div>
        </div>
          <div ref={this.bottom} />
        </li>
      );
    });

    return (
      <div className="chatroom-container">
      <div className="message-list-wrapper">
        <button className="load-button"
          onClick={this.loadChat.bind(this)}>
          Load Chat History
        </button>
        <div className="message-list">{messageList}</div>
      </div>
        <MessageForm 
        currentUser={this.props.currentUser} 
        currentChannel={this.props.selectedChannel.id} 
        subscription={this.subscription}
        className="message-form"/>
      </div>
    );
  }
}

export default ChatRoom;