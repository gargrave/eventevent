// @flow
import type { ReduxAction } from '../../common/flowtypes';
import type { Event } from '../../events/flowtypes';

import { createEventOnAPI } from '../../../wrappers/api/v1/events';
import { parseAPIError } from '../../../wrappers/api/v1/errors';
import { setApiError } from '../../core/actions/setApiError';

import types from './types';
import { requestEnd } from './requestEnd';
import { requestStart } from './requestStart';

const _createEvent = (event: Event) => ({
  type: types.CREATE_EVENT,
  payload: { event },
});

export const createEvent = (event: Event) =>
  async(dispatch: Function, getState: Function) => {
    const token = getState().auth.token;
    dispatch(requestStart());
    const res: any = await createEventOnAPI(event, token);
    if (res.error) {
      dispatch(setApiError(res.error));
      dispatch(requestEnd());
      throw parseAPIError(res.error);
    } else {
      dispatch(_createEvent(res.events));
      dispatch(requestEnd());
      return res.events;
    }
  };

export const createEventReducer =
  (state: any, action: ReduxAction) => ({
    ...state,
    data: action.payload.event,
  });