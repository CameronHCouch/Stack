import React from 'react';

class MemberList extends React.Component {
  constructor(props) {
    super(props);
  };

  offline(){
    return <i className='far fa-circle user-offline'></i>
  }

  online(){
    return <i className='fas fa-circle user-online'></i>
  }

  render(){
    let members = Object.values(this.props.members || {}).map((member) => {
      return (
        <li
          className="user-info-wrapper"
          key={ member.id }
          >
          {member.id === this.props.currentUser ? this.online() : this.offline() }
          <img className="small-user-icon" src={ member.img_url } />
          <div className="username">
            <strong>{ member.username }</strong> { member.id === this.props.currentUser ? "(you)" : "" }
          </div>
        </li>
      )
    });

    return (
      <ul className="member-list">
        {members}
      </ul>
    )
  };
};

export default MemberList;