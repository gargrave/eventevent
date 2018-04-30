// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../actions';

import COMPONENT_NAME from '../../components/COMPONENT_NAME/COMPONENT_NAME';

/* eslint-disable no-unused-vars */
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(COMPONENT_NAME);
