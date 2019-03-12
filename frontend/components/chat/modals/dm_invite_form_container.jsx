import { connect } from 'react-redux';
import DMInviteForm from './dm_invite_form';
import { createChannel, clearErrors } from '../../../actions/channel_actions';
import { selectChannel } from '../../../actions/ui_actions';
import { closeModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'create',
    channel: {
      id: '',
      name: '',
      description: '',
      workspace_id: 2,
      is_dm: true,
      member_list: `${state.session.currentUser.id}`,
    },
    users: state.entities.users,
  };
};

const mdp = dispatch => {
  return {
    createChannel: (channel) => dispatch(createChannel(channel)),
    selectChannel: (channel) => dispatch(selectChannel(channel)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(msp, mdp)(DMInviteForm));