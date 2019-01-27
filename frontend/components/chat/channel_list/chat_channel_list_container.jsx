import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChatChannelList from './chat_channel_list';
import { requestChannels } from '../../../actions/channel_actions';

const msp = state => {
  return {
    channels: Object.values(state.entities.channels),
    workspace: Object.values(state.entities.workspaces),
  };
};

const mdp = dispatch => {
  return {
    requestChannels: () => dispatch(requestChannels())}
};

export default withRouter(connect(msp,mdp)(ChatChannelList));