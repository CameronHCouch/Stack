import { connect } from 'react-redux';
import DMInvitePopup from './dm_invite_popup';
import { displayDMInvitePopup,
         hideDMInvitePopup } from '../../../actions/ui_actions';
import { createChannel,
          selectChannel } from '../../../actions/channel_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    workspace: Object.values(state.entities.workspaces)[0],
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    hideDMInvitePopup: () => dispatch(hideDMInvitePopup()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    selectChannel: (channel) => dispatch(selectChannel(channel)),
  };
};

export default connect(msp, mdp)(DMInvitePopup);