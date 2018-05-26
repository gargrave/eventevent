// @flow
import type { Event } from '../../../../modules/events/flowtypes';

import API from '../apiWrapper';

const URL = '/events';

async function createEventOnAPI(data: Event, token: string) {
  const res = await API.post(URL, data, token);
  return res.data;
}

export default createEventOnAPI;
