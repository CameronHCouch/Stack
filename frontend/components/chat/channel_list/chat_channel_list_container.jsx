import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChatChannelList from './chat_channel_list';
import { requestChannels } from '../../../actions/channel_actions';

const msp = state => {
  return {
    channels: state.entities.channels,
  };
};

const mdp = dispatch => {
  return {
    requestChannels: () => dispatch(requestChannels())}
};

export default withRouter(connect(msp,mdp)(ChatChannelList));