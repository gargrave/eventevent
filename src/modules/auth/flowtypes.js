// @flow
export type LoginErrors = {
  found?: boolean,
  email: string,
  password: string,
};

export type LoginUser = {
  email: string,
  password: string,
};

export type RegisterErrors = {
  found?: boolean,
  email: string,
  password: string,
  passwordConfirm: string,
};

export type RegisterUser = {
  email: string,
  password: string,
  passwordConfirm: string,
};

// TODO: clean this up; differentiate local user from API data
export type User = {
  id?: string,
  uid?: string,
  displayName?: string,
  email: string,
  emailVerified?: boolean,
  lastLogin?: Date | string,
  metadata?: any,
  password?: string,
  registered?: Date | string,
};

export type PasswordReset = {
  email: string,
}

export type PasswordResetErrors = {
  hasErrors?: boolean,
  email: string,
}
