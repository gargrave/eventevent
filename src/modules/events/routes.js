// @flow
import type { ReactRoute } from '../core/flowtypes';

import { localUrls } from '../../globals/urls';

import ConnectedCreateEventPage from './containers/ConnectedCreateEventPage/ConnectedCreateEventPage';
import ConnectedMyEventsPage from './containers/ConnectedMyEventsPage/ConnectedMyEventsPage';

const routes: ReactRoute[] = [
  {
    component: ConnectedMyEventsPage,
    exact: true,
    path: localUrls.events.myHosted,
  },
  {
    component: ConnectedMyEventsPage,
    exact: true,
    path: localUrls.events.myRegistered,
  },
  {
    component: ConnectedCreateEventPage,
    exact: true,
    path: localUrls.events.create,
  },
];

export default routes;