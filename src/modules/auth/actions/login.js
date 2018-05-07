// @flow
import type { ReduxAction } from '../../common/flowtypes';

import { submitLogin } from '../../../wrappers/auth';
import { parseAPIError } from '../../../wrappers/errors';
import { setApiError } from '../../core/actions/setApiError';

import { requestEnd } from './requestEnd';
import { requestStart } from './requestStart';
import { setLocalUserData } from './setLocalUserData';

type Args = {
  email: string,
  password: string,
}

export const login = ({
  email,
  password,
}: Args) =>
  async(dispatch: any) => {
    dispatch(requestStart());
    try {
      const result: any = await submitLogin(email, password);
      const user = setLocalUserData(result);
      return user;
    } catch (err) {
      dispatch(setApiError(err));
      throw parseAPIError(err);
    } finally {
      dispatch(requestEnd());
    }
  };

export const loginReducer = 
  (state: any, action: ReduxAction) => ({
    ...state,
    user: action.payload.user,
  });
