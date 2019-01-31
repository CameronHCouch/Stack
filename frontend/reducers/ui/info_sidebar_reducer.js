import {
  DISPLAY_INFO_SIDEBAR,
  HIDE_INFO_SIDEBAR,
} from '../../actions/ui_actions.js';

import { RECEIVE_CHANNEL } from '../../actions/channel_actions.js';

export default (state = null, action) => {
  switch (action.type) {
    case DISPLAY_INFO_SIDEBAR:
      return DISPLAY_INFO_SIDEBAR;
    case HIDE_INFO_SIDEBAR:
      return HIDE_INFO_SIDEBAR;
    case RECEIVE_CHANNEL:
      return null;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};