import React from 'react';
import { connect } from 'react-redux';

import SignoutDropdownContainer from '../sidebar/signout_dropdown_container';
import DMInvitePopupContainer from './dm_invite_popup_container';

import {
  DISPLAY_SIGNOUT_DROPDOWN,
  DISPLAY_DM_INVITE_POPUP,
} from '../../../actions/ui_actions';

const msp = state => (
  { dropdown: state.ui.dropdown }
);

const mdp = dispatch => ({
  hideSignoutDropdown: () => dispatch(hideSignoutDropdown()),

});

const DropdownManager = (props) => {
  switch (props.dropdown) {
    case DISPLAY_SIGNOUT_DROPDOWN:
      return (
        <div className={`dropdown`}>
          <SignoutDropdownContainer />
        </div>
      );
    case DISPLAY_DM_INVITE_POPUP:
      return (
        <div className={'dm-invite-popup'}>
          <DMInvitePopupContainer />
        </div>
      );
    default:
      return null;
  };

};

export default connect(msp, mdp)(DropdownManager);