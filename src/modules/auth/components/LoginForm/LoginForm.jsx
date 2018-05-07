// @flow
import React from 'react';
import { bool, func, shape, string } from 'prop-types';

import type { LoginErrors, LoginUser } from '../../flowtypes';

import Form from '../../../common/components/Form/Form';
import InputField from '../../../common/components/InputField/InputField';

type Props = {
  disabled?: boolean,
  errors: LoginErrors,
  loginUser: LoginUser,
  onInputChange: Function,
  onSubmit: Function,
  submitBtnText?: string,
  submitDisabled?: boolean,
  topLevelError?: string,
};

const LoginForm = ({
  disabled = false,
  errors,
  loginUser,
  onInputChange,
  onSubmit,
  submitBtnText,
  submitDisabled,
  topLevelError,
}: Props) => (
  <Form
    disabled={disabled}
    onSubmit={onSubmit}
    submitBtnText={submitBtnText}
    submitDisabled={submitDisabled}
    topLevelError={topLevelError}
  >
    <InputField
      boundValue={loginUser.email}
      disabled={disabled}
      error={errors.email}
      label="Email"
      name="email"
      onInputChange={onInputChange}
      type="email"
    />

    <InputField
      boundValue={loginUser.password}
      disabled={disabled}
      error={errors.password}
      label="Password"
      name="password"
      onInputChange={onInputChange}
      type="password"
    />
  </Form>
);

LoginForm.propTypes = {
  disabled: bool,
  errors: shape({
    email: string.isRequired,
    password: string.isRequired,
  }).isRequired,
  loginUser: shape({
    email: string.isRequired,
    password: string.isRequired,
  }).isRequired,
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  submitBtnText: string,
  submitDisabled: bool,
  topLevelError: string,
};

export default LoginForm;
