import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../../store/store';

import ConnectedApp from './containers/ConnectedApp/ConnectedApp';

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

export default AppWrapper;
