import { reducerContainer } from '../../../store/helpers';

import types from './types';
import { fetchHostedEvents, fetchHostedEventsReducer } from './fetchHostedEvents';
import { requestEndReducer } from './requestEnd';
import { requestStartReducer } from './requestStart';

const defaultState = () => ({
  data: [],
  eventsRequestPending: false,
});

export default reducerContainer(
  defaultState(),
  {
    [types.FETCH_HOSTED_EVENTS_SUCCESS]: fetchHostedEventsReducer,
    [types.REQUEST_END]: requestEndReducer,
    [types.REQUEST_START]: requestStartReducer,
  }
);

export const actions = { 
  fetchHostedEvents,
};
