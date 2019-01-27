import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import channelsReducer from './entities/channels_reducer';
import workspacesReducer from './entities/workspaces_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  workspaces: workspacesReducer
});

export default entitiesReducer;