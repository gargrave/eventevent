// @flow
import type { ApiUserData, LocalUserData } from '../flowtypes';
import type { ReduxAction } from '../../common/flowtypes';

import { loginToAPI } from '../../../wrappers/api/v1/auth';
import { parseAPIError } from '../../../wrappers/api/v1/errors';
import { setApiError } from '../../core/actions/setApiError';

import { userModel } from '../models';
import { requestEnd } from './requestEnd';
import { requestStart } from './requestStart';
import types from './types';

type Args = {
  email: string,
  password: string,
}

const _login = (user: LocalUserData) => ({
  type: types.LOGIN,
  payload: { user },
});

export const login = ({
  email,
  password,
}: Args) =>
  async(dispatch: any) => {
    dispatch(requestStart());

    const data: any = await loginToAPI(email, password);
    if (data.error) {
      dispatch(setApiError(data.error));
      dispatch(requestEnd());
      throw parseAPIError(data.error);
    } else {
      dispatch(setLocalUserData(data.user));
      dispatch(requestEnd());
      return data.user;
    }
  };

export const setLocalUserData = (user: ApiUserData) =>
  async(dispatch: any) => {
    const userData = userModel.fromAPI(user);
    dispatch(_login(userData));
    return userData;
  };

export const loginReducer = 
  (state: any, action: ReduxAction) => ({
    ...state,
    userData: action.payload.user,
  });
