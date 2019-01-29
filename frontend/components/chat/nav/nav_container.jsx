import { connect } from 'react-redux';
import Nav from './nav'

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    selectedChannel: state.entities.channels[state.ui.sidebar.selectedId] || {}
  }
}

const mdp = dispatch => {
  return {}
}

export default connect(msp, mdp)(Nav);