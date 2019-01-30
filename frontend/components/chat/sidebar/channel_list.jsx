import React from 'react';
import ChannelListItemContainer from './channel_list_item_container';

class ChannelList extends React.Component {
  constructor(props){
    super(props)
  }

  

  render(){
    let channels = this.props.channels;
    let channelLis = [];
    channels.forEach((channel, idx) => {
      if ((channel.is_dm == (this.props.channelType)) &&
        (this.props.workspace[1].id === channel.workspace_id)) {
        channelLis.push(<ChannelListItemContainer
          channelType={this.props.channelType} 
          channel={channel}
          key={channel.id}
          />);
      }
    });

    return(
        <ul className="channel-names">
          {channelLis}
        </ul>
    );
  }
}

export default ChannelList;