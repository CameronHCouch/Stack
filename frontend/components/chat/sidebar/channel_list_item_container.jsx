import { connect } from 'react-redux';
import ChannelListItem from './channel_list_item';
import { selectChannel } from '../../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return {
    currentUserId: state.session.id,
    selectedId: state.ui.sidebar.selectedId,
  };
};

const mdp = dispatch => {
  return {
    selectChannel: id => dispatch(selectChannel(id)),
  };
};

export default withRouter(connect(msp, mdp)(ChannelListItem));