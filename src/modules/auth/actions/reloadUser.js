// @flow
import { fetchUser } from '../../../wrappers/api/v1/auth';
import { parseAPIError } from '../../../wrappers/api/v1/errors';
import { setApiError } from '../../core/actions/setApiError';

import { setLocalUserData } from './login';
import { requestEnd } from './requestEnd';
import { requestStart } from './requestStart';

export const reloadUser = (token: string) =>
  async(dispatch: any) => {
    dispatch(requestStart());

    const data: any = await fetchUser(token);
    if (data.error) {
      dispatch(setApiError(data.error));
      dispatch(requestEnd());
      throw parseAPIError(data.error);
    } else {
      const fullUserData = { ...data.user, token };
      dispatch(setLocalUserData(fullUserData));
      dispatch(requestEnd());
      return fullUserData;
    }
  };
