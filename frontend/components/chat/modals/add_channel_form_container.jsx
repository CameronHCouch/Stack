import { connect } from 'react-redux';
import AddChannelForm from './add_channel_form';
import { createChannel, clearErrors } from '../../../actions/channel_actions';
import { selectChannel } from '../../../actions/ui_actions';
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
            is_dm: false
  }
  }
}

const mdp = dispatch => {
  return {
    processForm: (channel) => dispatch(createChannel(channel)),
    selectChannel: (channel) => dispatch(selectChannel(channel)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default withRouter(connect(msp, mdp)(AddChannelForm))