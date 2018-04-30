import { connect } from 'react-redux';

import { setInitialized } from '../../actions';

import AppComponent from '../../components/AppComponent/AppComponent';

/* eslint-disable no-unused-vars */
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setInitialized() {
    return dispatch(setInitialized());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
