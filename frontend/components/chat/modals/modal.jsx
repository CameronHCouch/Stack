import React from 'react';
import { connect } from 'react-redux';

import CreateChannelForm from './create_channel_form_container';
import EditChannelForm from './edit_channel_form_container';
import UpdateUsernameForm from './update_username_form_container';

import {
  CREATE_CHANNEL_MODAL,
  EDIT_CHANNEL_MODAL,
  UPDATE_USERNAME_MODAL,
  closeModal
} from '../../../actions/modal_actions';

const msp = state => (
  { modal: state.ui.modal }
);

const mdp = dispatch => (
  { closeModal: () => dispatch(closeModal()) }
);

const Modal = (props) => {

  switch (props.modal) {
    case CREATE_CHANNEL_MODAL:
      return (
        <div className={`modal`}>
          <button onClick={props.closeModal} className="modal-close-x">&#10005;</button>
          <CreateChannelForm />
        </div>
      );
    case EDIT_CHANNEL_MODAL:
      return (
        <div className={`modal`}>
          <button onClick={props.closeModal} className="modal-close-x">&#10005;</button>
          <EditChannelForm />
        </div>
      );
    case UPDATE_USERNAME_MODAL:
      return (
        <div className='modal'>
          <button onClick={props.closeModal} className="modal-close-x">&#10005;</button>
          <UpdateUsernameForm />
        </div>
      );
    default:
      return null;
  }

};

export default connect(msp, mdp)(Modal);