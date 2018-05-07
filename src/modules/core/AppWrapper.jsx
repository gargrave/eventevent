import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../../store/store';

import AppContainer from './containers/AppContainer/AppContainer';

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default AppWrapper;
