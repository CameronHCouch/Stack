import { connect } from 'react-redux';
import ChannelList from './channel_list';

const msp = state => {
  return {
    channels: Object.values(state.entities.channels),
    workspace: state.entities.workspaces[1]
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp,mdp)(ChannelList);