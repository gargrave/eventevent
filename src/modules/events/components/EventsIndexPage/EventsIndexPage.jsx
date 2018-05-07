// @flow
import React, { Component } from 'react';

import styles from './EventsIndexPage.css';

type Props = {
};

class EventsIndexPage extends Component<Props> {
  static propTypes = {
  };

  render() {
    return (
      <section className={styles.eventsIndexPage}>
        <h2>Browse Public Events</h2>
      </section>
    );
  }
}

export default EventsIndexPage;
