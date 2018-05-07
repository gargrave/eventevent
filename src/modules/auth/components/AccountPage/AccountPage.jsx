// @flow
import React, { Component } from 'react';
import { func, object, shape } from 'prop-types';

import type { LocalAccountData } from '../../../auth/flowtypes';

import { localUrls } from '../../../../globals/urls';

import Button from '../../../common/components/Button/Button';

import styles from './AccountPage.css';

type Props = {
  account: LocalAccountData,
  actions: Object,
  history: Object,
};

class AccountPage extends Component<Props> {
  static propTypes = {
    account: object.isRequired,
    actions: shape({
      logout: func.isRequired,
    }).isRequired,
    history: object,
  };

  onLogoutClick = async(e: SyntheticMouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      await this.props.actions.logout();
    } catch (err) {
      console.error(err);
    } finally {
      this.props.history.push(localUrls.auth.login);
    }
  }

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
        <Button 
          onClick={this.onLogoutClick}
          text='Logout'
        />
      </section>
    );
  }
}

export default AccountPage;
