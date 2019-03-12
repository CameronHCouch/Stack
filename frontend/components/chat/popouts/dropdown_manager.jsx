import React from 'react';
import { connect } from 'react-redux';

import SignoutDropdownContainer from '../sidebar/signout_dropdown_container';

import {
  DISPLAY_SIGNOUT_DROPDOWN,
  hideSignoutDropdown,
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
          <SignoutDropdownContainer hideSignoutDropdown={props.hideSignoutDropdown} />
        </div>
      );
    default:
      return null;
  };

};

export default connect(msp, mdp)(DropdownManager);