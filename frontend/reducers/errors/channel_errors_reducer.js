import { RECEIVE_CHANNEL_ERRORS, RECEIVE_CHANNEL, CLEAR_ERRORS } from '../../actions/channel_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case RECEIVE_CHANNEL:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};