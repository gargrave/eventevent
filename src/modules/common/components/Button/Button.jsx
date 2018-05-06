// @flow
import React from 'react';
import { bool, func, oneOf, string } from 'prop-types';

type Props = {
  canSubmit?: boolean,
  classes?: string,
  disabled?: boolean,
  onClick: Function,
  text: string,
  type?: string,
};

const Button = ({
  canSubmit,
  disabled,
  onClick,
  text,
  type = 'primary',
}: Props) => {
  return (
    <button
      className={`button button-${type}`}
      disabled={disabled || false}
      onClick={onClick}
      type={canSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  canSubmit: bool,
  classes: string,
  disabled: bool,
  onClick: func.isRequired,
  text: string.isRequired,
  type: oneOf([
    'primary',
    'success',
    'secondary',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]),
};

export default Button;
