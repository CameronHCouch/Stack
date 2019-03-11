import {
  DISPLAY_SIGNOUT_DROPDOWN,
  HIDE_SIGNOUT_DROPDOWN,
} from '../../actions/ui_actions.js';

export default (state = null, action) => {
  switch (action.type) {
    case DISPLAY_SIGNOUT_DROPDOWN:
      return DISPLAY_SIGNOUT_DROPDOWN;
    case HIDE_SIGNOUT_DROPDOWN:
      return HIDE_SIGNOUT_DROPDOWN;
    default:
      return state;
  }
};