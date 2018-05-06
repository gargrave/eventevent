// @flow
import type { ReduxAction } from '../../common/flowtypes';
import type { Event } from '../../events/flowtypes';

import { fetchHostedEventsFromAPI } from '../../../wrappers/api/events';
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
    const events = getState().events.data;
    if (events.length) {
      return events;
    }
    
    dispatch(requestStart());
    try {
      const records = await fetchHostedEventsFromAPI();
      dispatch(_fetchHostedEvents(records));
      return records;
    } catch (err) {
      dispatch(setApiError(err));
    } finally {
      dispatch(requestEnd());
    }
  };

export const fetchHostedEventsReducer =
  (state: any, action: ReduxAction) => ({
    ...state,
    data: action.payload.events,
  });