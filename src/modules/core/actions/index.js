import { reducerContainer } from '../../../store/helpers';

import types from './types';
import { setApiErrorReducer } from './setApiError';
import { setInitialized, setInitializedReducer } from './setInitialized';

const defaultState = () => ({
  initialized: false,
});

export default reducerContainer(
  defaultState(),
  {
    [types.INITIALIZED]: setInitializedReducer,
    [types.SET_API_ERROR]: setApiErrorReducer,
  }
);

export const actions = { 
  setInitialized,
};
