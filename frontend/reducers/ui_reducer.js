import { RECEIVE_EMAIL } from '../actions/ui_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { SELECT_CHANNEL } from '../actions/ui_actions';
import { merge } from 'lodash';

const defaultState = { email: null };

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EMAIL:
      return {email: action.email };
    case RECEIVE_CURRENT_USER:
      return defaultState;
    case SELECT_CHANNEL:
      let newState = merge({}, state);
      newState.selectedId = action.channelId;
      return newState;
    default:
      return state;
  }
}