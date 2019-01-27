import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import channelErrorsReducer from './errors/channel_errors_reducer';
import workspaceErrorsReducer from './errors/workspace_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  channel: channelErrorsReducer,
  workspace: workspaceErrorsReducer,
});

export default errorsReducer; 