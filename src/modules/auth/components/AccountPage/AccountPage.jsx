// @flow
import React, { Component } from 'react';

import styles from './AccountPage.css';

type Props = {
};

class AccountPage extends Component<Props> {
  static propTypes = {
  };

  render() {
    return (
      <section className={styles.accountPage}>
        <h2>My Account</h2>
      </section>
    );
  }
}

export default AccountPage;
