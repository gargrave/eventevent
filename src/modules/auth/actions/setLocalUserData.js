// @flow
import type { User } from '../flowtypes';

import { userModel } from '../models';
import types from './types';

const _setLocalUserData = (user) => ({
  type: types.LOGIN,
  payload: { user },
});

export const setLocalUserData = (user: User) =>
  async(dispatch: any) => {
    const userData = userModel.fromAPI(user);
    dispatch(_setLocalUserData(userData));
    return userData;
  };
