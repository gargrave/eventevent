// @flow
import type { User } from '../flowtypes';

import { userModel } from '../models';
import types from './types';

const setLocalUserDataAction = (user) => ({
  type: types.LOGIN,
  payload: { user },
});

export const setLocalUserData = (user: User) =>
  (dispatch: any) => {
    console.log('%cClean up Flow type for:', 'color: pink;font-size: 12px;background:#454;padding:2px 4px;');
    console.log({ user });
    const userData = userModel.fromAPI(user);
    dispatch(setLocalUserDataAction(userData));
    return userData;
  };
