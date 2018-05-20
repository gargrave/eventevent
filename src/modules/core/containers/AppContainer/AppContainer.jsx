import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../actions';
import { actions as authActions } from '../../../auth/actions';

import App from '../../components/App/App';

/* eslint-disable no-unused-vars */
const mapStateToProps = (state) => ({
  token: state.auth.token,
  userData: state.auth.userData,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
