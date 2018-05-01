// @flow
import React from 'react';
import { func } from 'prop-types';

type Props = {
  onChange: Function,
  onSubmit: Function,
};

// TODO: need to update forms to show errors
const LoginForm = ({
  onChange,
  onSubmit,
}: Props) => (
  <h4>Login Form</h4>
);

LoginForm.propTypes = {
  onChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default LoginForm;


