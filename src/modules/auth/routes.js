// @flow
import type { ReactRoute } from '../core/flowtypes';

import LoginPageContainer from './containers/LoginPageContainer/LoginPageContainer';

const routes: ReactRoute[] = [
  {
    component: LoginPageContainer,
    exact: true,
    path: '/account/login',
  },
];

export default routes;