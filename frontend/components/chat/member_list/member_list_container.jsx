import { connect } from 'react-redux';
import MemberList from './member_list';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    members: state.entities.users || {},
    selectedChannel: state.entities.channels[state.ui.sidebar.selectedId] || {},
  };
};

const mdp = dispatch => {
  return {

  };
};

export default withRouter(connect(msp, mdp)(MemberList));