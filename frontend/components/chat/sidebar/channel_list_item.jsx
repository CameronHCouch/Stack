import React from 'react';
class ChannelListItem extends React.Component{

  handleSelect(){
    this.props.selectChannel(this.props.channel.id);
    this.props.history.push(`/channels/${this.props.channel.id}`);
  }

  render(){
    debugger
    if (this.props.channel.is_dm == false) {
      return (
          <a href="#">
            <li className={(this.props.selectedId && (this.props.selectedId === this.props.channel.id)) ? "selected-channel" : ""} 
              onClick={this.handleSelect.bind(this)}>
              {`#${this.props.channel.name}`}
            </li>
          </a>
      );
    } else {
      return (
          <a href="#">
            <li className={(this.props.selectedId && (this.props.selectedId === this.props.channel.id)) ? "selected-channel" : ""} 
              onClick={this.handleSelect.bind(this)}>
              <span className="offline">
                <i className="far fa-circle"></i>
              </span>{this.props.channel.name}
            </li>
          </a>
      );
    }
  }
}

export default ChannelListItem