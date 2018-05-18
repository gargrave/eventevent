// @flow
import type { ReduxAction } from '../../common/flowtypes';

import types from './types';

export const setApiError = (err: any) => ({
  type: types.SET_API_ERROR,
  payload: { err },
});

export const setApiErrorReducer =
  (state: any, action: ReduxAction) => ({
    ...state,
    apiError: {
      code: action.payload.err.statusCode,
      message: action.payload.err.message,
      name: action.payload.err.error,
    },
  });