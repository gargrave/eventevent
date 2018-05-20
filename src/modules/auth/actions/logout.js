// @flow
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
      // await submitLogout();
      // TODO move this to the new API
    } catch (err) {
      dispatch(setApiError(err));
      throw parseAPIError(err);
    } finally {
      localStorage.removeItem('token');
      dispatch(_logout());
      dispatch(requestEnd());
    }
  };

export const logoutReducer = (state: any) => ({
  ...state,
  token: null,
  userData: null,
});
