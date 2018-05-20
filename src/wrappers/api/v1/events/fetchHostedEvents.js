// @flow
import API from '../apiWrapper';

const URL = '/events';

async function fetchHostedEventsFromAPI(token: string) {
  const res = await API.get(URL, token);
  return res.data;
}

export default fetchHostedEventsFromAPI;
