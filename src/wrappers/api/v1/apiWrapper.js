import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';
const DEFAULT_HEADERS = { Accept: 'application/json' };

function buildReq(method, url, data = null, token = null) {
  const req = {
    method,
    headers: { ...DEFAULT_HEADERS },
    url: `${BASE_URL}${url}`,
  };
  
  if (data) req.data = data;
  if (token) {
    req.headers.authorization = token;
  }

  return req;
}

async function request(method, url, data = null, token = null) {
  try {
    const req = buildReq(method, url, data, token);
    const res = await axios(req);
    return {
      data: res.data.data || [],
      statusCode: res.status,
    };
  } catch (err) {
    const error = err.response.data.data
    ? err.response.data.data
    : { error: err.response.data };
    return { data: error, response: err.response };
  }
}

export default {
  get: async(url, token = null) => request('get', url, null, token),
  post: async(url, payload, token = null) => request('post', url, payload, token),
  put: async(url, payload, token) => request('put', url, payload, token),
  patch: async(url, payload, token) => request('patch', url, payload, token),
  del: async(url, token) => request('delete', url, null, token),
};
