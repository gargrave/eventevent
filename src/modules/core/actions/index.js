import { reducerContainer } from '../../../store/helpers';

import types from './types';
import { setInitialized, setInitializedReducer } from './setInitialized';

const defaultState = () => ({
  initialized: false,
});

export default reducerContainer(
  defaultState(),
  {
    [types.INITIALIZED]: setInitializedReducer,
  }
);

export const actions = { 
  setInitialized,
};
