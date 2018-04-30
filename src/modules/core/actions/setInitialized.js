// @flow
import type { ReduxAction } from '../../common/flowtypes';

import types from './types';

export const setInitialized = () =>
  async(dispatch: any) => dispatch({
    type: types.INITIALIZED,
  });

/* eslint-disable no-unused-vars */
export const setInitializedReducer = 
  (state: any, action: ReduxAction) => ({
    ...state,
    initialized: true,
  });
