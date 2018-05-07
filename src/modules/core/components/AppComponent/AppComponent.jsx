// @flow
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { func, shape } from 'prop-types';

import { firebaseAuth } from '../../../../wrappers/firebase';

import Routes from '../../Routes';
import TempHeader from '../../../placeholders/TempHeader/TempHeader';

import styles from './AppComponent.css';

type Props = {
  actions: Object,
  authActions: Object,
};

class AppComponent extends Component<Props> {
  static propTypes = {
    actions: shape({
      setInitialized: func.isRequired,
    }).isRequired,
    authActions: shape({
      login: func.isRequired,
      setLocalUserData: func.isRequired,
    }).isRequired,
  }

  async componentDidMount() {
    firebaseAuth.onAuthStateChanged(async(user) => {
      if (user) {
        this.props.authActions.setLocalUserData(user);
      }
      this.props.actions.setInitialized();
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <TempHeader />
          <main className={styles.appWrapper}>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
