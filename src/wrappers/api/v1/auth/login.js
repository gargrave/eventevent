import API from '../apiWrapper';

const URL = '/auth/login';

async function loginToAPI(email, password) {
  const res = await API.post(URL, { email, password });
  return res.data;
}

export default loginToAPI;
