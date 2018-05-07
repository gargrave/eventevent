// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { localUrls } from '../../../../globals/urls';
import { actions } from '../../actions';

import AuthenticatedRoute from '../../../common/hoc/AuthenticatedRoute/AuthenticatedRoute';
import AccountPage from '../../components/AccountPage/AccountPage';

/* eslint-disable no-unused-vars */
const mapStateToProps = (state: any) => ({
  account: state.auth.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AuthenticatedRoute(AccountPage, localUrls.auth.login)
);
