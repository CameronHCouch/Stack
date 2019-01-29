import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const requestUsers = () => dispatch => {
  return UserApiUtil.requestUsers().then(
    users => dispatch(receiveUsers(users))
  );
};