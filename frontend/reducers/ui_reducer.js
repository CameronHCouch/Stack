import { RECEIVE_EMAIL } from '../actions/ui_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultState = { email: null };

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EMAIL:
      return {email: action.email };
    case RECEIVE_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
}