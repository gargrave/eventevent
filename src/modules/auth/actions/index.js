import { reducerContainer } from '../../../store/helpers';

import types from './types';
import { login, loginReducer, setLocalUserData } from './login';
import { logout, logoutReducer } from './logout';
import { requestEndReducer } from './requestEnd';
import { requestStartReducer } from './requestStart';

const defaultState = () => ({
  authRequestPending: false,
  token: null,
  userData: null,
});

export default reducerContainer(
  defaultState(),
  {
    [types.LOGIN]: loginReducer,
    [types.LOGOUT]: logoutReducer,
    [types.REQUEST_END]: requestEndReducer,
    [types.REQUEST_START]: requestStartReducer,
  }
);

export const actions = { 
  login,
  logout,
  setLocalUserData,
};
