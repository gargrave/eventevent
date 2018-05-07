// @flow
import React, { Component } from 'react';
import { object } from 'prop-types';

import type { LocalAccountData } from '../../../auth/flowtypes';

import styles from './AccountPage.css';

type Props = {
  account: LocalAccountData,
};

class AccountPage extends Component<Props> {
  static propTypes = {
    account: object.isRequired,
  };

  render() {
    const { account } = this.props;
    return (
      <section className={styles.accountPage}>
        <h2>My Account</h2>
        <ul>
          <li>Email: {account.email}</li>
          <li>Verified: {account.emailVerified ? 'Yes' : 'No'}</li>
          <li>Registered: {account.registered}</li>
          <li>Last login: {account.lastLogin}</li>
        </ul>
      </section>
    );
  }
}

export default AccountPage;
