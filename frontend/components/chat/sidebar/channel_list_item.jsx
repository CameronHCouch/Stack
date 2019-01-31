import React from 'react';
class ChannelListItem extends React.Component{

  handleSelect(){
    this.props.selectChannel(this.props.channel.id);
    this.props.history.push(`/channels/${this.props.channel.id}`);
  }

  render(){
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
        <div className={`whole-list-item ${(this.props.selectedId && (this.props.selectedId === this.props.channel.id)) ? "selected-channel" : ""}`}>
            <a href="#">
              <li className={(this.props.selectedId && (this.props.selectedId === this.props.channel.id)) ? "selected-channel" : ""} 
                onClick={this.handleSelect.bind(this)}>
                <span className="offline">
                  <i className="far fa-circle"></i>
                </span>{this.props.channel.name}
              </li>
            </a>
          <div onClick={() => this.props.deleteChannel(this.props.channel.id)} className="delete-channel-button"><i className="far fa-times-circle"></i></div>
          </div>
          
      );
    }
  }
}

export default ChannelListItem