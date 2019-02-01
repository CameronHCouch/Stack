import React from 'react';
import { connect } from 'react-redux';

import InfoSidebarContainer from '../info-sidebar/info_sidebar_container';

import {
  DISPLAY_INFO_SIDEBAR,
  hideInfoSidebar,
} from '../../../actions/ui_actions';
 
const msp = state => (
  { info: state.ui.info }
);

const mdp = dispatch => (
  { hideInfoSidebar: () => dispatch(hideInfoSidebar()) }
);

const InfoPopout = (props) => {

  switch (props.info) {
    case DISPLAY_INFO_SIDEBAR:
      return (
        <div className={`popup`}>
          <InfoSidebarContainer hideInfoSidebar={props.hideInfoSidebar}/>
        </div>
      );
    default:
      return null;
  };

};

export default connect(msp, mdp)(InfoPopout);