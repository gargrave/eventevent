import { submitLogin } from '../auth';

export const loginAsUser = async(user) => {
  const res = await submitLogin(user.email, user.password);
  return res.user;
};
