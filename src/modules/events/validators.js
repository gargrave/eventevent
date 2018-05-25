// @flow

import type { Event, EventErrors } from './flowtypes';

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

  return errors;
}