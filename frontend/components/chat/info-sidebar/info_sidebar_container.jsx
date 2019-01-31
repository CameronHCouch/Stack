import { connect } from 'react-redux';
import InfoSidebar from './info_sidebar';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    selectedChannel: state.entities.channels[state.ui.sidebar.selectedId] || {},
    members: Object.values(state.entities.users) || {},
    visibleDescription: false,
    visibleMembers: false,
  };
};

export default connect(msp, null)(InfoSidebar);