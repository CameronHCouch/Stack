import React from 'react';
import MemberListContainer from '../member_list/member_list_container';

class DMInviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.channel;
    this.update = this.update.bind(this);
    this.visible = false;
  };

  errors() {
    if (this.props.errors.channel) {
      return (this.props.errors.channel.map((er, idx) => {
        return <li className="error channel-error" key={idx}>{er}</li>
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
    this.setState({ member_list: this.state.member_list,
                    name: this.state.name.slice(0,21) });
    this.props.createChannel(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value, 
                      name: e.currentTarget.value });
    }
  }

  valid_submit() {
    if (this.state.member_list && this.state.member_list.length > 1) {
      return "valid";
    } else {
      return "";
    }
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }

  showMemberList() {
    if (this.visible == false) {
      return "invisible";
    } else {
      return "visible";
    }
  }

  render() {
    return (
      <div className="channel-form-modal">
        <section className="channel-form-header">
          <h1 className="channel-form-header">Direct Messages</h1>
        </section>
        <ul>
          {this.errors()}
        </ul>
        <form className="dm-form" onSubmit={this.handleSubmit.bind(this)}>

          <label id="member_list">
            <input
              type='text'
              htmlFor="member_list"
              className="member_list"
              // value={this.state.member_list}
              onChange={this.update('member_list')}
            />
          </label>
          {/* <div className={this.showMemberList()}>
            <MemberListContainer members={this.props.users} />
          </div> */}
            <input
              type="submit"
              value="Go"
              className={`dm-invite ${this.valid_submit()}`}
            >
            </input>
        </form>
        <br />
      </div>
    )
  }
}

export default DMInviteForm;