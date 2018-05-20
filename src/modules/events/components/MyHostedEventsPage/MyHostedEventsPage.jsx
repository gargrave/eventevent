// @flow
import React, { Component } from 'react';
import { array, bool, func, shape } from 'prop-types';
import { format } from 'date-fns';

import type { Event } from '../../flowtypes';

import styles from './MyHostedEventsPage.css';

const DATE_FORMAT = 'ddd, MMM DD, YYYY @ h:mm A Z';

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
                <ul key={event.id}>
                  <li><strong>Title</strong> {event.title}</li>
                  <li><strong>Date</strong> {format(event.date, DATE_FORMAT)}</li>
                </ul>
              );
            })
          }
        </ul>
      </section>
    );
  }
}

export default MyHostedEventsPage;
