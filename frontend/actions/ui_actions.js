export const RECEIVE_EMAIL = "RECEIVE_EMAIL";
export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const SELECT_WORKSPACE = "SELECT_WORKSPACE";

export const DISPLAY_INFO_SIDEBAR = "DISPLAY_INFO_SIDEBAR";
export const HIDE_INFO_SIDEBAR = "HIDE_INFO_SIDEBAR";

export const HIDE_SIGNOUT_DROPDOWN = "HIDE_SIGNOUT_DROPDOWN";
export const DISPLAY_SIGNOUT_DROPDOWN = "DISPLAY_SIGNOUT_DROPDOWN";

export const DISPLAY_DM_INVITE_POPUP = "DISPLAY_DM_INVITE_POPUP";
export const HIDE_DM_INVITE_POPUP = "HIDE_DM_INVITE_POPUP";


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

export const displayInfoSidebar = () => ({
  type: DISPLAY_INFO_SIDEBAR,
});

export const hideInfoSidebar = () => ({
  type: HIDE_INFO_SIDEBAR,
});

export const displaySignoutDropdown = () => ({
  type: DISPLAY_SIGNOUT_DROPDOWN,
})

export const hideSignoutDropdown = () => ({
  type: HIDE_SIGNOUT_DROPDOWN,
});


export const displayDMInvitePopup = () => ({
  type: DISPLAY_DM_INVITE_POPUP,
})

export const hideDMInvitePopup = () => ({
  type: HIDE_DM_INVITE_POPUP,
});