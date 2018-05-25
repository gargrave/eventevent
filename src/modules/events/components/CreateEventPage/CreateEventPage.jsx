// @flow
import React, { Component } from 'react';

import type { Event, EventErrors } from '../../flowtypes';

import { eventModel } from '../../models';
import { eventHasAllFields, validateEvent } from '../../validators';

import EventForm from '../EventForm/EventForm';

import styles from './CreateEventPage.css';

// TODO: need a 'createEvent' action
type Props = {
};

type State = {
  errors: EventErrors,
  formDisabled: boolean,
  model: Event,
  submitDisabled: boolean,
  topLevelError: string,
};

class CreateEventPage extends Component<Props, State> {
  static propTypes = {
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      errors: eventModel.emptyErrors(),
      formDisabled: false,
      model: eventModel.empty(),
      submitDisabled: true,
      topLevelError: '',
    };
  }

  onInputChange = (e: any) => {
    e.preventDefault();
    const key = e.target.name;
    if (key in this.state.model) {
      const model = { ...this.state.model, [key]: e.target.value };
      const submitDisabled = !eventHasAllFields(model);
      this.setState({ model, submitDisabled });
    }
  }

  onSubmit = (e: any) => {
    e.preventDefault();
    const model = this.state.model;
    const errors = validateEvent(model);

    if (errors.found) {
      this.setState({ errors });
      return;
    }

    this.setState({
      errors: eventModel.emptyErrors(),
      formDisabled: true,
      topLevelError: '',
    }, async() => {
      try {
        const eventData = eventModel.toAPI(model);
        console.log('submit dat event!');
        // await this.props.actions.login(eventData);
        // this.props.history.push(localUrls.events.myHosted);
      } catch (err) {
        this.setState({
          formDisabled: false,
          topLevelError: err,
        });
      }
    });
  }

  render() {
    const { errors, formDisabled, model, submitDisabled, topLevelError } = this.state;
    return (
      <section className={styles.createEventPage}>
        <h2>Schedule an Event</h2>
        <EventForm 
          disabled={formDisabled}
          errors={errors}
          model={model}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          submitDisabled={submitDisabled}
          topLevelError={topLevelError}
        />
      </section>
    );
  }
}

export default CreateEventPage;
