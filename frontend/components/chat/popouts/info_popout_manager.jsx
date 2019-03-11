import React from 'react';
import { connect } from 'react-redux';

import InfoSidebarContainer from '../info-sidebar/info_sidebar_container';
import SignoutDropdownContainer from '../sidebar/signout_dropdown';

import {
  DISPLAY_INFO_SIDEBAR,
  hideInfoSidebar,
  DISPLAY_SIGNOUT_DROPDOWN,
  hideSignoutDropdown,
} from '../../../actions/ui_actions';
 
const msp = state => (
  { info: state.ui.info }
);

const mdp = dispatch => ({
  hideInfoSidebar: () => dispatch(hideInfoSidebar()),
  hideSignoutDropdown: () => dispatch(hideSignoutDropdown()), 
});

const InfoPopout = (props) => {

  switch (props.info) {
    case DISPLAY_INFO_SIDEBAR:
      return (
        <div className={`popup`}>
          <InfoSidebarContainer hideInfoSidebar={props.hideInfoSidebar}/>
        </div>
      );
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

export default connect(msp, mdp)(InfoPopout);