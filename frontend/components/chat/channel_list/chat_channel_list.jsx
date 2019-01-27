import React from 'react';
import ChatChannelListItem from './chat_channel_list_item';

class ChatChannelList extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.requestChannels();
  }

  render(){
    let channels = Object.values(this.props.channels);
    
    channels = channels.map((channel, idx) => {
      return(<ChatChannelListItem
        channelType={this.props.channelType} 
        channel={channel}
        key={idx}
        />
    )
  });

  return(
      <ul className="channel-names">
        {channels}
      </ul>
    )
  }
}

export default ChatChannelList;