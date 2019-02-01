import { connect } from 'react-redux';
import Nav from './nav';
import { editChannelModal } from '../../../actions/modal_actions';
import { displayInfoSidebar, hideInfoSidebar } from '../../../actions/ui_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    selectedChannel: state.entities.channels[state.ui.sidebar.selectedId] || {},
    users: Object.values(state.entities.users),
    sidebarVisible: false,
  };
};

const mdp = dispatch => {
  return {
    editChannelModal: () => dispatch(editChannelModal()),
    displayInfoSidebar: () => dispatch(displayInfoSidebar()),
    hideInfoSidebar: () => dispatch(hideInfoSidebar()),
  };
};

export default connect(msp, mdp)(Nav);