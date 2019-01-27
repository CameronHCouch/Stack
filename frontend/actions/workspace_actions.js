import * as WorkspaceAPIUtil from '../util/workspace_api_util';

export const RECEIVE_USERS_WORKSPACES = "RECEIVE_USERS_WORKSPACES";
export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";
export const CREATE_WORKSPACE = "CREATE_WORKSPACE"

const receiveUsersWorkspaces = (workspaces) => {
  return {
    type: RECEIVE_USERS_WORKSPACES,
    workspaces
  }
}

const receiveWorkspace = (workspace) => {
  return {
    type: RECEIVE_WORKSPACE,
    workspace
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_WORKSPACE_ERRORS,
    errors
  }
}

export const requestWorkspaces = () => dispatch => {
  return WorkspaceAPIUtil.requestWorkspaces().then(
    (workspaces) => dispatch(receiveUsersWorkspaces(workspaces)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const requestWorkspace = (id) => dispatch => {
  return WorkspaceAPIUtil.requestWorkspaces(id).then(
    (workspace) => dispatch(receiveWorkspace(workspace)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const createWorkspace = (workspace) => dispatch => {
  return WorkspaceAPIUtil.createWorkspace(workspace).then(
    (workspace) => dispatch(receiveWorkspace(workspace)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
}


export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}