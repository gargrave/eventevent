import { reducerContainer } from '../../../store/helpers';

import types from './types';
import { login, loginReducer } from './login';
import { requestEndReducer } from './requestEnd';
import { requestStartReducer } from './requestStart';

const defaultState = () => ({
  authRequestPending: false,
  user: null,
  verificationEmailSent: false,
});

export default reducerContainer(
  defaultState(),
  {
    [types.LOGIN]: loginReducer,
    [types.REQUEST_END]: requestEndReducer,
    [types.REQUEST_START]: requestStartReducer,
  }
);

export const actions = { 
  login,
};
