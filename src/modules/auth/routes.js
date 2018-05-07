// @flow
import type { ReactRoute } from '../core/flowtypes';

import { localUrls } from '../../globals/urls';

import LoginPageContainer from './containers/LoginPageContainer/LoginPageContainer';

const routes: ReactRoute[] = [
  {
    component: LoginPageContainer,
    exact: true,
    path: localUrls.auth.login,
  },
];

export default routes;