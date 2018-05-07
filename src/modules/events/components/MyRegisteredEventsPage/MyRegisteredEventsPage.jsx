// @flow
import React, { Component } from 'react';

import styles from './MyRegisteredEventsPage.css';

type Props = {
};

class MyRegisteredEventsPage extends Component<Props> {
  static propTypes = {
  };

  render() {
    return (
      <section className={styles.myRegisteredEventsPage}>
        <h2>Events I am Attending</h2>
      </section>
    );
  }
}

export default MyRegisteredEventsPage;
