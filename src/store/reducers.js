import { combineReducers } from 'redux';

import app from '../modules/core/actions';
import auth from '../modules/auth/actions';
import events from '../modules/events/actions';

export default combineReducers({
  app,
  auth,
  events,
});
