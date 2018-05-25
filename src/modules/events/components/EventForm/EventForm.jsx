// @flow
import React from 'react';
import { bool, func, shape, string } from 'prop-types';

import type { Event, EventErrors } from '../../flowtypes';

import Form from '../../../common/components/Form/Form';
import InputField from '../../../common/components/InputField/InputField';

type Props = {
  disabled?: boolean,
  errors: EventErrors,
  model: Event,
  onInputChange: Function,
  onSubmit: Function,
  submitDisabled: boolean,
  topLevelError: string,
};

const EventForm = ({
  disabled = false,
  errors,
  model,
  onInputChange,
  onSubmit,
  submitDisabled,
  topLevelError,
}: Props) => (
  <div>
    <h2>EventForm</h2>
    <Form 
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
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  submitDisabled: bool,
  topLevelError: string,
};

export default EventForm;
