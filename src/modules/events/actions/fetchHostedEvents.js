// @flow
import type { ReduxAction } from '../../common/flowtypes';
import type { Event } from '../../events/flowtypes';

import { fetchHostedEventsFromAPI } from '../../../wrappers/api/v1/events';
import { parseAPIError } from '../../../wrappers/api/v1/errors';
import { setApiError } from '../../core/actions/setApiError';

import types from './types';
import { requestEnd } from './requestEnd';
import { requestStart } from './requestStart';

const _fetchHostedEvents = (events: Event[]) => ({
  type: types.FETCH_HOSTED_EVENTS_SUCCESS,
  payload: { events },
});

export const fetchHostedEvents = () =>
  async(dispatch: Function, getState: Function) => {
    const token = getState().auth.token;
    const events = getState().events.data;
    if (events.length > 1) {
      return events;
    }
    
    dispatch(requestStart());
    const data: any = await fetchHostedEventsFromAPI(token);
    if (data.error) {
      dispatch(setApiError(data.error));
      dispatch(requestEnd());
      throw parseAPIError(data.error);
    } else {
      dispatch(_fetchHostedEvents(data.events));
      dispatch(requestEnd());
      return data.events;
    }
  };

export const fetchHostedEventsReducer =
  (state: any, action: ReduxAction) => ({
    ...state,
    data: action.payload.events,
  });