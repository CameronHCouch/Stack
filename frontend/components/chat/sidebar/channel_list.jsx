import React from 'react';
import ChannelListItemContainer from './channel_list_item_container';

class ChannelList extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.requestChannels();
  }

  render(){
    let channels = this.props.channels;
    channels = channels.map((channel, idx) => {
      return(<ChannelListItemContainer
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

export default ChannelList;