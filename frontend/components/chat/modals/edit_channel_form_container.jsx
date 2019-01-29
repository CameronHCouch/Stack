import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { updateChannel, clearErrors } from '../../../actions/channel_actions';
import { selectChannel } from '../../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'edit',
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
    processForm: (channel) => dispatch(updateChannel(channel)),
    selectChannel: (channel) => dispatch(selectChannel(channel)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default withRouter(connect(msp, mdp)(ChannelForm))