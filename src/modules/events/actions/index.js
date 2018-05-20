import { reducerContainer } from '../../../store/helpers';

import types from './types';
import authTypes from '../../auth/actions/types';
import { fetchHostedEvents, fetchHostedEventsReducer } from './fetchHostedEvents';
import { clearEventsReducer } from './clearEvents';
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
    [authTypes.LOGOUT]: clearEventsReducer,
  }
);

export const actions = { 
  fetchHostedEvents,
};
