// @flow
import type { ReactRoute } from '../core/flowtypes';

import { localUrls } from '../../globals/urls';

import CreateEventContainer from './containers/CreateEventContainer/CreateEventContainer';
import EventsIndexContainer from './containers/EventsIndexContainer/EventsIndexContainer';
import MyHostedEventsContainer from './containers/MyHostedEventsContainer/MyHostedEventsContainer';
import MyRegisteredEventsContainer from './containers/MyRegisteredEventsContainer/MyRegisteredEventsContainer';

const routes: ReactRoute[] = [
  {
    component: EventsIndexContainer,
    exact: true,
    path: localUrls.events.index,
  },
  {
    component: MyHostedEventsContainer,
    exact: true,
    path: localUrls.events.myHosted,
  },
  {
    component: MyRegisteredEventsContainer,
    exact: true,
    path: localUrls.events.myRegistered,
  },
  {
    component: CreateEventContainer,
    exact: true,
    path: localUrls.events.create,
  },
];

export default routes;