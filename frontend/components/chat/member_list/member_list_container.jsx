import { connect } from 'react-redux';
import MemberList from './member_list';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {

  };
};

const mdp = dispatch => {
  return {

  };
};

export default withRouter(connect(msp, mdp)(MemberList));