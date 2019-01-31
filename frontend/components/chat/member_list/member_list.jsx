import React from 'react';

class MemberList extends React.Component {
  constructor(props) {
    super(props);
  };

  render(){
    let members = Object.values(this.props.members || {}).map((member) => {
      return (
        <li
          className="user-info-wrapper"
          key={member.id}>
          <img className="small-user-icon" src={member.img_url} />
          <div className="username">
              <strong>{member.username}</strong> {member.id === this.props.currentUser ? "(you)" : ""}
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