// @flow
import React from 'react';
import { any, func, string } from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import styles from './Datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

type Props = {
  boundValue: any,
  error?: string,
  label?: string,
  name: string,
  onDateChange: Function,
};

const Datepicker = ({
  boundValue,
  error,
  label,
  name,
  onDateChange,
}: Props) => (
  <div className={`input-field ${styles.datepickerWrapper}`}>
    {label && <label htmlFor={name}>{label}:</label>}

    <DatePicker
      dateFormat="LLL"
      minDate={moment()}
      maxDate={moment().add(5, 'years')}
      onChange={onDateChange}
      readOnly={true}
      selected={moment(boundValue)}
      showTimeSelect={true}
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
    />

    {error && <p className={styles.errorMsg}>{error}</p>}
  </div>
);

Datepicker.propTypes = {
  boundValue: any,
  error: string,
  label: string,
  name: string.isRequired,
  onDateChange: func,
};

export default Datepicker;
