import { reducerContainer } from '../../../store/helpers';

import types from './types';
import authTypes from '../../auth/actions/types';
import { fetchHostedEvents, fetchHostedEventsReducer } from './fetchHostedEvents';
import { clearEventsReducer } from './clearEvents';
import { createEvent, createEventReducer } from './createEvent';
import { requestEndReducer } from './requestEnd';
import { requestStartReducer } from './requestStart';

const defaultState = () => ({
  data: [],
  eventsRequestPending: false,
});

export default reducerContainer(
  defaultState(),
  {
    [types.CREATE_EVENT]: createEventReducer,
    [types.FETCH_HOSTED_EVENTS_SUCCESS]: fetchHostedEventsReducer,
    [types.REQUEST_END]: requestEndReducer,
    [types.REQUEST_START]: requestStartReducer,
    [authTypes.LOGOUT]: clearEventsReducer,
  }
);

export const actions = {
  createEvent,
  fetchHostedEvents,
};
