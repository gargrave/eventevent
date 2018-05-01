// @flow
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { func, shape } from 'prop-types';

import Routes from '../../Routes';
import TempHeader from '../../../placeholders/TempHeader/TempHeader';

type Props = {
  actions: Object,
};

class AppComponent extends Component<Props> {
  static propTypes = {
    actions: shape({
      setInitialized: func.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.actions.setInitialized();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <TempHeader />
          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
