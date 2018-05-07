// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { localUrls } from '../../../../globals/urls';
import { actions } from '../../actions';

import AuthenticatedRoute from '../../../common/hoc/AuthenticatedRoute/AuthenticatedRoute';
import LoginPage from '../../components/LoginPage/LoginPage';

/* eslint-disable no-unused-vars */
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AuthenticatedRoute(LoginPage, localUrls.events.myHosted, false)
);
