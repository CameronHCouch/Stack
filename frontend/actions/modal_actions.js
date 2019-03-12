export const CREATE_CHANNEL_MODAL = 'CREATE_CHANNEL_MODAL';
export const EDIT_CHANNEL_MODAL = 'EDIT_CHANNEL_MODAL';
export const UPDATE_USERNAME_MODAL = "UPDATE_USERNAME_MODAL";
export const DM_INVITE_MODAL = "DM_INVITE_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const createChannelModal = () => {
  return {
    type: CREATE_CHANNEL_MODAL,
  };
};

export const editChannelModal = () => {
  return {
    type: EDIT_CHANNEL_MODAL,
  };
};

export const updateUsernameModal = () => {
  return {
    type: UPDATE_USERNAME_MODAL,
  };
};

export const dmInviteModal = () => {
  return {
    type: DM_INVITE_MODAL,
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};