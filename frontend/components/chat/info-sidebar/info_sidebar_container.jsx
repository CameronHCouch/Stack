import { connect } from 'react-redux';
import InfoSidebar from './info_sidebar';
import { hideInfoSidebar } from '../../../actions/ui_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser.id,
    selectedChannel: state.entities.channels[state.ui.sidebar.selectedId] || {},
    members: Object.values(state.entities.users) || {},
    visibleDescription: false,
    visibleMembers: false,
  };
};

export default connect(msp, null)(InfoSidebar);