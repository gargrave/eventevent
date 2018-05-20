// @flow
import React, { Component } from 'react';
import { func, object, shape } from 'prop-types';

import type { LocalUserData } from '../../flowtypes';

import { localUrls } from '../../../../globals/urls';

import Button from '../../../common/components/Button/Button';

import styles from './AccountPage.css';

type Props = {
  user: LocalUserData,
  actions: Object,
  history: Object,
};

class AccountPage extends Component<Props> {
  static propTypes = {
    user: object.isRequired,
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
    const { user } = this.props;
    return (
      <section className={styles.accountPage}>
        <h2>My Account</h2>
        <ul>
          <li>Email: {user.email}</li>
          <li>Registered: {user.createdAt}</li>
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
