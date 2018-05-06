// @flow
import React from 'react';
import { any, oneOf, string } from 'prop-types';

type Props = {
  children?: any,
  message: string,
  type: string,
};

const Alert = ({
  children,
  message,
  type,
}: Props) => (
    <div className={`alert alert-${type}`}>
      {message}
      {children}
    </div>
  );

Alert.propTypes = {
  children: any,
  message: string.isRequired,
  type: oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]).isRequired,
};

export default Alert;
