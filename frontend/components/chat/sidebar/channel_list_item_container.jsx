import { connect } from 'react-redux';
import ChannelListItem from './channel_list_item';
import { selectChannel } from '../../../actions/ui_actions';

const msp = state => {
  return {
    currentUserId: state.session.id,
    selectedId: state.ui.selectedId,
  };
};

const mdp = dispatch => {
  return {
    selectChannel: id => dispatch(selectChannel(id)),
  };
};

export default connect(msp, mdp)(ChannelListItem);