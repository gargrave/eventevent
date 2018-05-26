// @flow
import React from 'react';
import { bool, func, shape, string } from 'prop-types';

import type { Event, EventErrors } from '../../flowtypes';

import Datepicker from '../../../common/components/Datepicker/Datepicker';
import Form from '../../../common/components/Form/Form';
import InputField from '../../../common/components/InputField/InputField';

type Props = {
  disabled?: boolean,
  errors: EventErrors,
  model: Event,
  onDateChange: Function,
  onInputChange: Function,
  onSubmit: Function,
  submitDisabled: boolean,
  topLevelError: string,
};

const EventForm = ({
  disabled = false,
  errors,
  model,
  onDateChange,
  onInputChange,
  onSubmit,
  submitDisabled,
  topLevelError,
}: Props) => (
  <div>
    <h2>EventForm</h2>
    <Form 
      disabled={disabled}
      onSubmit={onSubmit}
      submitDisabled={submitDisabled}
      topLevelError={topLevelError}
    >
      <InputField
        boundValue={model.title}
        disabled={disabled}
        error={errors.title}
        label="Title"
        name="title"
        onInputChange={onInputChange}
      />

      <Datepicker 
        boundValue={model.date}
        error={errors.date}
        label="Date of Event"
        name="date"
        onDateChange={onDateChange}
      />
    </Form>
  </div>
);

EventForm.propTypes = {
  disabled: bool,
  errors: shape({
    title: string.isRequired,
  }).isRequired,
  model: shape({
    title: string.isRequired,
  }).isRequired,
  onDateChange: func.isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  submitDisabled: bool,
  topLevelError: string,
};

export default EventForm;
