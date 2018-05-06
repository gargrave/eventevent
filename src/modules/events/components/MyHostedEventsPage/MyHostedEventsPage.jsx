// @flow
import React, { Component } from 'react';
import { array, bool, func, shape } from 'prop-types';

import type { Event } from '../../flowtypes';

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

  componentDidUpdate() {
    const { initialized, loggedIn } = this.props;
    if (initialized && loggedIn) {
      this.props.actions.fetchHostedEvents();
    }
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default MyHostedEventsPage;
