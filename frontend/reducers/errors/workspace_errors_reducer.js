import { RECEIVE_WORKSPACE_ERRORS, RECEIVE_WORKSPACE, CLEAR_ERRORS } from '../../actions/workspace_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKSPACE_ERRORS:
      return action.errors || [];
    case RECEIVE_WORKSPACE:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};