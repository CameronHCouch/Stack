import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChatChannelSidebar from './chat_channel_sidebar';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
  }
}

const mdp = dispatch => {
  return {
  }
}

export default withRouter(connect(msp, mdp)(ChatChannelSidebar))