import React from 'react';

class ChannelListItem extends React.Component{
  constructor(props){
    super(props);
  }

  handleSelect(){
    this.props.selectChannel(this.props.channel.id)
  }

  render(){
    // debugger
    // let selected = this.props.channel === selectedId ? 'selected' : '';
    // add className selected that toggles if selectedId in state matches
    if ((this.props.channelType === "public") && (this.props.channel.is_dm === false)) {
      return (
        <>
          <a href="#"><li onClick={this.handleSelect.bind(this)}># {this.props.channel.name.slice(1,this.props.channel.name.length)}</li></a>
        </>
      )
    } else if ((this.props.channelType === "private") && (this.props.channel.is_dm === true)) {
      return (
        <>
          <a href="#"><li onClick={this.handleSelect.bind(this)}><span className="offline"><i className="far fa-circle"></i></span>{this.props.channel.name}</li></a>
        </>
      )
    } else {
      return ""
    }
  }
}

export default ChannelListItem


// <a href="#"><li><span className="offline"><i className="far fa-circle"></i></span>Private Convo 7</li></a>