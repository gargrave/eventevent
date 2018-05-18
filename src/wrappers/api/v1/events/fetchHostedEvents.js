// @flow
import axios from 'axios';

const DEFAULT_HEADERS = { Accept: 'application/json' };

async function fetchHostedEventsFromAPI(token: string) {
  const url = 'http://localhost:3001/api/v1/events';
  const method = 'get';
  const req = {
    method,
    headers: { 
      ...DEFAULT_HEADERS,
      authorization: token,
    },
    url,
  };

  try {
    const res = await axios.request(req);
    return res.data.data;
  } catch(err) {
    const errData = err.response.data.data;
    return errData;
  }
}

export default fetchHostedEventsFromAPI;
