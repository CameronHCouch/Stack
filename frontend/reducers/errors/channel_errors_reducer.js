import { RECEIVE_CHANNEL_ERRORS, RECEIVE_CHANNEL } from '../../actions/channel_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case RECEIVE_CHANNEL:
      return [];
    default:
      return state;
  }
};