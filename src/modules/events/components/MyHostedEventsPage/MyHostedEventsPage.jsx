// @flow
import React, { Component } from 'react';
import { array, bool, func, shape } from 'prop-types';

import type { Event } from '../../flowtypes';

import styles from './MyHostedEventsPage.css';

type Props = {
  actions: Object,
  events: Event[],
  initialized: boolean,
  loggedIn: boolean,
};

class MyHostedEventsPage extends Component<Props> {
  static propTypes = {
    actions: shape({
      fetchHostedEvents: func.isRequired,
    }).isRequired,
    events: array.isRequired,
    initialized: bool.isRequired,
    loggedIn: bool.isRequired,
  };

  componentDidMount() {
    this.fetchEventsIfNeeded();
  }

  componentDidUpdate() {
    this.fetchEventsIfNeeded();
  }

  fetchEventsIfNeeded() {
    const { initialized, loggedIn } = this.props;
    if (initialized && loggedIn) {
      this.props.actions.fetchHostedEvents();
    }
  }

  render() {
    return (
      <section className={styles.myHostedEventsPage}>
        <h2>Events I am Hosting</h2>
        <ul>
          {
            this.props.events.map((event) => {
              return (
                <li key={event.id}>{event.title}</li>
              );
            })
          }
        </ul>
      </section>
    );
  }
}

export default MyHostedEventsPage;
