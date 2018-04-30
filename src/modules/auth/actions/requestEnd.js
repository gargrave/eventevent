// @flow
import types from './types';

export const requestEnd = () => ({
  type: types.REQUEST_END,
});

export const requestEndReducer = 
  (state: any) => ({
    ...state,
    authRequestPending: false,
  });
