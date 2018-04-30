// @flow
import HomePage from './components/HomePage/HomePage';

import type { ReactRoute } from '../core/flowtypes';

const routes: ReactRoute[] = [
  {
    component: HomePage,
    exact: true,
    path: '/',
  },
];

export default routes;