// @flow
import type { ReactRoute } from '../core/flowtypes';

import HomePage from './components/HomePage/HomePage';

const routes: ReactRoute[] = [
  {
    component: HomePage,
    exact: true,
    path: '/',
  },
];

export default routes;