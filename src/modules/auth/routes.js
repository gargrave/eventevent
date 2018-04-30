// @flow
import type { ReactRoute } from '../core/flowtypes';

import ConnectedLoginPage from './containers/ConnectedLoginPage/ConnectedLoginPage';

const routes: ReactRoute[] = [
  {
    component: ConnectedLoginPage,
    exact: true,
    path: '/account/login',
  },
];

export default routes;