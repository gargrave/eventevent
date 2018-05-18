// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../actions';

import MyHostedEventsPage from '../../components/MyHostedEventsPage/MyHostedEventsPage';

/* eslint-disable no-unused-vars */
const mapStateToProps = (state: any) => ({
  events: state.events.data || [],
  initialized: state.app.initialized,
  loggedIn: !!(state.auth.userData),
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyHostedEventsPage);
