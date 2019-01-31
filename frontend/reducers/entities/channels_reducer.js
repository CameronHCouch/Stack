import { 
  RECEIVE_USERS_CHANNELS, 
  RECEIVE_CHANNEL, 
  REMOVE_CHANNEL } from '../../actions/channel_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_CHANNEL:
      return merge({}, state, {[action.channel.id]: action.channel});
    case REMOVE_CHANNEL:
      let newState = merge({}, state);
      delete newState[action.channelId]
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}; 