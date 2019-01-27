import { RECEIVE_USERS_WORKSPACES, RECEIVE_WORKSPACE } from '../../actions/workspace_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS_WORKSPACES:
      return merge({}, state, action.workspaces);
    case RECEIVE_WORKSPACE:
      return merge({}, state, { [action.workspace.id]: action.workspace });
    default:
      return state;
  }
}; 