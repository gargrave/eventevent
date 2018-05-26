// @flow
import React, { Component } from 'react';
import { any, func, shape } from 'prop-types';

import type { Event, EventErrors } from '../../flowtypes';

import { localUrls } from '../../../../globals/urls';
import { eventModel } from '../../models';
import { eventHasAllFields, validateEvent } from '../../validators';

import EventForm from '../EventForm/EventForm';

import styles from './CreateEventPage.css';

type Props = {
  actions: Object,
  history: any,
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
    actions: shape({
      createEvent: func.isRequired,
    }).isRequired,
    history: any,
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
        const payload = eventModel.toAPI(model);
        await this.props.actions.createEvent(payload);
        this.props.history.push(localUrls.events.myHosted);
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
