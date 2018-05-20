// @flow
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { func, object, shape, string } from 'prop-types';

import Routes from '../../Routes';
import TempHeader from '../../../placeholders/TempHeader/TempHeader';

import styles from './App.css';

type Props = {
  actions: Object,
  authActions: Object,
  token: string,
  userData: Object,
};

class App extends Component<Props> {
  static propTypes = {
    actions: shape({
      setInitialized: func.isRequired,
    }).isRequired,
    authActions: shape({
      reloadUser: func.isRequired,
      setLocalUserData: func.isRequired,
    }).isRequired,
    token: string,
    userData: object,
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      await this.props.authActions.reloadUser(token);
    }
    this.props.actions.setInitialized();
  }

  get loggedIn(): boolean {
    return !!(this.props.token && this.props.userData);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <TempHeader loggedIn={this.loggedIn} />
          <main className={styles.appContainer}>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
