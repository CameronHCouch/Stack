import { connect } from 'react-redux';
import ChannelForm from './channel_form';
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
            is_dm: false,
            member_list: '',
  }
  }
}

const mdp = dispatch => {
  return {
    processForm: (channel) => dispatch(createChannel(channel)),
    selectChannel: (channel) => dispatch(selectChannel(channel)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
  }
}

export default withRouter(connect(msp, mdp)(ChannelForm))