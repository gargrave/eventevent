// @flow
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { func, shape } from 'prop-types';

import { firebaseAuth } from '../../../../wrappers/firebase';

import Routes from '../../Routes';
import TempHeader from '../../../placeholders/TempHeader/TempHeader';

import styles from './App.css';

type Props = {
  actions: Object,
  authActions: Object,
};

type State = {
  loggedIn: boolean,
};

class App extends Component<Props, State> {
  static propTypes = {
    actions: shape({
      setInitialized: func.isRequired,
    }).isRequired,
    authActions: shape({
      login: func.isRequired,
      setLocalUserData: func.isRequired,
    }).isRequired,
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  async componentDidMount() {
    firebaseAuth.onAuthStateChanged(async(user) => {
      const loggedIn = !!user;
      if (loggedIn) {
        this.props.authActions.setLocalUserData(user);
      }
      this.setState({ loggedIn });
    });
    this.props.actions.setInitialized();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <TempHeader loggedIn={this.state.loggedIn} />
          <main className={styles.appContainer}>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
