// @flow
import type { ReactRoute } from '../core/flowtypes';

import { localUrls } from '../../globals/urls';

import AccountPageContainer from './containers/AccountPageContainer/AccountPageContainer';
import LoginPageContainer from './containers/LoginPageContainer/LoginPageContainer';

const routes: ReactRoute[] = [
  {
    component: AccountPageContainer,
    exact: true,
    path: localUrls.auth.account,
  },
  {
    component: LoginPageContainer,
    exact: true,
    path: localUrls.auth.login,
  },
];

export default routes;