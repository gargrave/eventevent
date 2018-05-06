// @flow
import types from './types';

export const requestStart = () => ({
  type: types.REQUEST_START,
});

export const requestStartReducer = 
  (state: any) => ({
    ...state,
    eventsRequestPending: true,
  });
