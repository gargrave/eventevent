import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../actions';
import { actions as authActions } from '../../../auth/actions';

import AppComponent from '../../components/AppComponent/AppComponent';

/* eslint-disable no-unused-vars */
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
