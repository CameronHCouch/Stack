import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.channel;
    this.update = this.update.bind(this);
    this.toggleChannelForm = this.toggleChannelForm.bind(this);
  };

  errors() {
    if (this.props.errors.channel) {
      return (this.props.errors.channel.map((er, idx) => {
        return <li className="error" key={idx}>{er}</li>
      })
      )
    }
  }

  componentDidMount() {
    this.props.clearErrors();
    if (this.props.workspace) {
      this.setState({ workspace_id: this.props.workspace_id });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({name: '#' + this.state.name})
    debugger
    this.props.processForm(this.state).then(() =>
      this.props.selectChannel);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value })
  }

  toggleDM(){
    this.setState({is_dm: (!this.state.is_dm)})
  }

  valid_submit(){
    if (this.state.name && this.state.name.length){
      return "valid"
    } else {
      return ""
    }
  }

  toggleChannelForm(){
    return "visible"
  }

  render() {
    return (
      <>
        <section className="channel-form-header">
          <h1 className="channel-form-header">Create a {(this.state.is_dm === false) ? "" : "private "}channel</h1>
          <p className="channel-form-description">Channels are where your members communicate. They're best when organized around a topic -- #leads, for example.</p>

          <button 
            className={(this.state.is_dm === false) ? "Public" : "Private"} 
            onClick={this.toggleDM.bind(this)}>
            {(this.state.is_dm === false) ? "Public" : "Private"}
            <span className="white-toggle-circle"></span>
          </button>
          <span className="dm-toggle-description">
          {(this.state.is_dm === false) ? 
          "Anyone in your workspace can view and join this channel." :
          "This channel can only be joined or viewed by invite."
          }
          </span>
        </section>
        <ul>
          {this.errors()}
        </ul>
        <form className="channel-form" onSubmit={this.handleSubmit.bind(this)}>
          <label id="name"><strong>Name</strong></label>
            <input type='text'
              value={this.state.name}
              onChange={this.update('name')}
              htmlFor="name"
              placeholder="# e.g. leads" />
          <p className="channel-form-input-description">Names must be lowercase, without spaces or periods, and shorter than 22 characters.</p>
          <label id="description"><strong>Purpose</strong> (optional)</label>
            <input
              type='text'
              value={this.state.description}
              onChange={this.update('description')}
              htmlFor="description"
              className="description"
            />
          <p className="channel-form-input-description">What's this channel about?</p>
          <section className="channel-form-buttons">
            <button className="cancel">Cancel</button>
            <input 
              type="submit" 
              value={"Create Channel"}
              className={`create-channel ${this.valid_submit()}`}
              >
            </input>
          </section>
        </form>
        <br />
      </>
    )
  }
}

export default ChannelForm;