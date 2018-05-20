// @flow
import API from '../apiWrapper';

const URL = '/auth/user';

async function fetchUser(token: string) {
  const res = await API.get(URL, token);
  return res.data;
}

export default fetchUser;
