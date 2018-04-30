import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/store';

import ConnectedApp from './containers/ConnectedApp/ConnectedApp';

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedApp />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppWrapper;
