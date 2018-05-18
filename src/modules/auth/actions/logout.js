// @flow
import { submitLogout } from '../../../wrappers/auth';
import { parseAPIError } from '../../../wrappers/api/v1/errors';
import { setApiError } from '../../core/actions/setApiError';

import types from './types';
import { requestEnd } from './requestEnd';
import { requestStart } from './requestStart';

const _logout = () => ({ type: types.LOGOUT });

export const logout = () =>
  async(dispatch: any) => {
    dispatch(requestStart());
    try {
      await submitLogout();
    } catch (err) {
      dispatch(setApiError(err));
      throw parseAPIError(err);
    } finally {
      dispatch(_logout());
      dispatch(requestEnd());
    }
  };

export const logoutReducer = (state: any) => ({
  ...state,
  user: null,
});
