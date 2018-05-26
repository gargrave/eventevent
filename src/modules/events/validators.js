// @flow
import isLength from 'validator/lib/isLength';
import isValid from 'date-fns/is_valid';

import type { Event, EventErrors } from './flowtypes';

import { validationErrors } from '../../globals/errors';

export function eventHasAllFields(data: Event): boolean {
  return !!data.title
    && !!data.date;
}

export function validateEvent(data: Event): EventErrors {
  const errors: EventErrors = {
    found: false,
    date: '',
    title: '',
  };
  const { date, title } = data;

  if (!isLength(title, { min: 1 })) {
    errors.found = true;
    errors.title = validationErrors.length(1);
  }

  // validate date (will throw an error is date is not a valid date object)
  try {
    if (!isValid(date)) {
      errors.found = true;
      errors.date = validationErrors.format('date');
    }
  } catch (err) {
    errors.found = true;
    errors.date = validationErrors.format('date');
  }

  return errors;
}