import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: ""};
  };

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[1].speak({ 
      message: {
        body: this.state.body, 
        author_id: this.props.currentUser, 
        channel_id: this.props.currentChannel
      }
    });
    this.setState({ body: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder={`Message ${Object.keys(this.props.selectedChannel).length === 0 ? "" : this.props.selectedChannel.name}`}
            className="message-form"
          />
          <input type="submit" className="hidden" />
        </form>
      </div>
    );
  };
};

export default MessageForm;