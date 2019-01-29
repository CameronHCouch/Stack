import {
  CREATE_CHANNEL_MODAL,
  EDIT_CHANNEL_MODAL,
  CLOSE_MODAL,
} from '../../actions/modal_actions.js';

import { RECEIVE_CHANNEL } from '../../actions/channel_actions.js';

export default (state = null, action) => {
  switch (action.type) {
    case CREATE_CHANNEL_MODAL:
      return CREATE_CHANNEL_MODAL;
    case EDIT_CHANNEL_MODAL:
      return EDIT_CHANNEL_MODAL;
    case RECEIVE_CHANNEL:
      return null;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};