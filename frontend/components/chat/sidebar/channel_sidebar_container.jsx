import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import ChannelSidebar from './channel_sidebar';
import { requestChannels } from '../../../actions/channel_actions';
import { createChannelModal } from '../../../actions/modal_actions';
import { displaySignoutDropdown,
         hideSignoutDropdown, } from '../../../actions/ui_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    workspace: Object.values(state.entities.workspaces)[0],
    status: state.ui.dropdown,
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestChannels: () => dispatch(requestChannels()),
    createChannelModal: () => dispatch(createChannelModal()),
    displaySignoutDropdown: () => dispatch(displaySignoutDropdown()),
    hideSignoutDropdown: () => dispatch(hideSignoutDropdown()),
  };
};

export default connect(msp, mdp)(ChannelSidebar);