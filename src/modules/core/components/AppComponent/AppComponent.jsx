// @flow
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { func, shape } from 'prop-types';

import { firebaseAuth } from '../../../../wrappers/firebase';
import { mockUsers } from '../../../../wrappers/firebase/mocks';

import Routes from '../../Routes';
import TempHeader from '../../../placeholders/TempHeader/TempHeader';

const tempUser = mockUsers[0];

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
      // TODO: we can get rid of this once we have a proper login process
      if (user) {
        this.props.authActions.setLocalUserData(user);
        this.props.actions.setInitialized();
      } else {
        console.log('logging in...');
        this.props.authActions.login(tempUser);
      }
    });
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
