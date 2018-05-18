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


export type ApiUserData = {
  id: string,
  email: string,
  created_at: Date | string,
  token: string,
  updated_at: Date | string,
};

export type LocalUserData = {
  id: string,
  email: string,
  createdAt: Date | string,
  updatedAt: Date | string,
};
