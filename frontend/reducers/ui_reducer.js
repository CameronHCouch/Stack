

import { combineReducers } from 'redux';
import sidebarReducer from './ui/sidebar_ui_reducer.js';
import modalReducer from './ui/modal_ui_reducer.js';
import infoSidebarReducer from './ui/info_sidebar_reducer';

export default combineReducers({ 
  sidebar: sidebarReducer, 
  modal: modalReducer,
  info: infoSidebarReducer,
});
