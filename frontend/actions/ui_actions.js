export const RECEIVE_EMAIL = "RECEIVE_EMAIL";
export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const SELECT_WORKSPACE = "SELECT_WORKSPACE";


export const receiveEmail = (email) => {
  return {
    type: RECEIVE_EMAIL,
    email
  }
}

export const selectChannel = channelId => {
  return {
    type: SELECT_CHANNEL,
    channelId
  };
};


export const selectWorkspace = workspaceId => {
  return {
    type: SELECT_WORKSPACE,
    workspaceId
  };
};

