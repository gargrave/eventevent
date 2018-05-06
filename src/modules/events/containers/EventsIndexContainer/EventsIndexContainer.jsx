// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../actions';

import EventsIndexPage from '../../components/EventsIndexPage/EventsIndexPage';

/* eslint-disable no-unused-vars */
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndexPage);
