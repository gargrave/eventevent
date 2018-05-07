// @flow
import React, { Component } from 'react';

import styles from './CreateEventPage.css';

type Props = {
};

class CreateEventPage extends Component<Props> {
  static propTypes = {
  };

  render() {
    return (
      <section className={styles.createEventPage}>
        <h2>Schedule an Event</h2>
      </section>
    );
  }
}

export default CreateEventPage;
