import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { updateChannel, clearErrors } from '../../../actions/channel_actions';
import { selectChannel } from '../../../actions/ui_actions';
import { closeModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  const selectedChannel = state.entities.channels[state.ui.sidebar.selectedId]
  return {
    errors: state.errors,
    formType: 'edit',
    selectedChannel,
    channel: {
            id: selectedChannel.id,
            name: selectedChannel.name,
            description: selectedChannel.description,
            workspace_id: selectedChannel.workspace_id,
            is_dm: selectedChannel.is_dm,
            member_list: "",
    },
    users: state.entities.users,
  };
};

const mdp = dispatch => {
  return {
    processForm: (channel) => dispatch(updateChannel(channel)),
    selectChannel: (channel) => dispatch(selectChannel(channel)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(msp, mdp)(ChannelForm));