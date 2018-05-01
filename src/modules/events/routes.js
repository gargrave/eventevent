// @flow
import type { ReactRoute } from '../core/flowtypes';

import ConnectedCreateEventPage from './containers/ConnectedCreateEventPage/ConnectedCreateEventPage';
import ConnectedMyEventsPage from './containers/ConnectedMyEventsPage/ConnectedMyEventsPage';

const routes: ReactRoute[] = [
  {
    component: ConnectedMyEventsPage,
    exact: true,
    path: '/events',
  },
  {
    component: ConnectedCreateEventPage,
    exact: true,
    path: '/events/schedule',
  },
];

export default routes;