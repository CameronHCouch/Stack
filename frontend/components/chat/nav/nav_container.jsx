import { connect } from 'react-redux';
import Nav from './nav'
import { editChannelModal } from '../../../actions/modal_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    selectedChannel: state.entities.channels[state.ui.sidebar.selectedId] || {},
    users: Object.values(state.entities.users),
  }
}

const mdp = dispatch => {
  return {
    editChannelModal: () => dispatch(editChannelModal()),
  }
}

export default connect(msp, mdp)(Nav);