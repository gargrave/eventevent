// @flow
import type { FbError } from '../../../globals/firebase/flowtypes';
import type { ReduxAction } from '../../common/flowtypes';

import types from './types';

export const setApiError = (err: FbError) => ({
  type: types.SET_API_ERROR,
  payload: {err},
});

export const setApiErrorReducer =
  (state: any, action: ReduxAction) => ({
    ...state,
    apiError: {
      code: action.payload.err.code,
      message: action.payload.err.message,
      name: action.payload.err.name,
    },
  });