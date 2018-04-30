// @flow
import React from 'react';
import { func } from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

type Props = {
  onChange: Function,
  onSubmit: Function,
};

// TODO: need to update forms to show errors
const LoginForm = ({
  onChange,
  onSubmit,
}: Props) => (
  <Form onSubmit={onSubmit}>
    <Form.Input 
      name="email"
      label="Email"
      onChange={onChange}
    />
    <Form.Input 
      name="password"
      label="Password"
      onChange={onChange}
      type="password"
    />
    <Button type='submit'>Submit</Button>
  </Form>
);

LoginForm.propTypes = {
  onChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default LoginForm;


