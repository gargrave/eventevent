// @flow
import type {
  ApiUserData,
  LocalUserData,
  LoginErrors,
  LoginUser,
} from './flowtypes';

export const userModel = {
  fromAPI(user: ApiUserData): LocalUserData {
    const {
      created_at,
      email,
      id,
      token,
      updated_at,
    } = user;

    return {
      createdAt: created_at,
      email,
      id,
      token,
      updatedAt: updated_at,
    };
  },
};

export const loginUserModel = {
  empty: (): LoginUser => ({
    email: '',
    password: '',
  }),

  emptyErrors: (): LoginErrors => ({
    email: '',
    password: '',
  }),

  toAPI: (user: LoginUser): LoginUser => ({
    email: user.email,
    password: user.password,
  }),
};
