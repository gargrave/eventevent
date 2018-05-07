// @flow
import type {
  LoginErrors,
  LoginUser,
  User,
} from './flowtypes';

export const userModel = {
  empty: (): User => ({
    displayName: '',
    email: '',
    emailVerified: false,
    id: '',
    lastLogin: '',
    registered: '',
  }),

  fromAPI(user: User): User {
    const {
      displayName,
      email,
      emailVerified,
      uid,
    } = user;
    const {
      creationTime,
      lastSignInTime,
    } = (user.metadata: any);

    return {
      displayName,
      email,
      emailVerified,
      id: uid,
      lastLogin: lastSignInTime,
      registered: creationTime,
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
