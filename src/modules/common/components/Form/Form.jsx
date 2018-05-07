// @flow
import React from 'react';
import { any, func, bool, string} from 'prop-types';

import Alert from '../Alert/Alert';
import Button from '../Button/Button';

import styles from './Form.css';

type Props = {
  cancelBtnText?: string,
  children?: any,
  disabled?: boolean,
  onCancel?: Function,
  onSubmit: Function,
  submitBtnText?: string,
  submitDisabled?: boolean,
  topLevelError?: string,
};

const Form = ({
  cancelBtnText,
  children,
  disabled,
  onCancel,
  onSubmit,
  submitBtnText,
  submitDisabled = false,
  topLevelError,
}: Props) => {
  return (
    <div>
      {topLevelError &&
        <Alert
          message={topLevelError}
          type="danger"
        />
      }
      <form
        className={styles.form}
        onSubmit={onSubmit}
        noValidate>

        {children}

        <div className="input-field">
          <Button
            canSubmit={true}
            disabled={submitDisabled || disabled || false}
            onClick={onSubmit}
            position="left"
            text={submitBtnText || 'Submit'}
            type="success"
          />

          {onCancel &&
            <Button
              onClick={onCancel}
              text={cancelBtnText || 'Cancel'}
              type="light"
            />
          }
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  cancelBtnText: string,
  children: any,
  disabled: bool,
  onCancel: func,
  onSubmit: func.isRequired,
  submitBtnText: string,
  submitDisabled: bool,
  topLevelError: string,
};

export default Form;
