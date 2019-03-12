import {
  DISPLAY_SIGNOUT_DROPDOWN,
  HIDE_SIGNOUT_DROPDOWN,
} from '../../actions/ui_actions.js';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

export default (state = null, action) => {
  switch (action.type) {
    case DISPLAY_SIGNOUT_DROPDOWN:
      return DISPLAY_SIGNOUT_DROPDOWN;
    case HIDE_SIGNOUT_DROPDOWN:
      return HIDE_SIGNOUT_DROPDOWN;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
};