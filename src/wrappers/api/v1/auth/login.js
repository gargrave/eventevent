import axios from 'axios';

const DEFAULT_HEADERS = { Accept: 'application/json' };

async function loginToAPI(email, password) {
  const url = 'http://localhost:3001/api/v1/auth/login';
  const method = 'post';
  const req = {
    method,
    headers: { ...DEFAULT_HEADERS },
    url,
    data: { email, password },
  };

  try {
    const res = await axios.request(req);
    return res.data.data;
  } catch(err) {
    const errData = err.response.data.data;
    return errData;
  }
}

export default loginToAPI;
