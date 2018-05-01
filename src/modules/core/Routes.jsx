// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import type { ReactRoute } from './flowtypes';

import authRoutes from '../auth/routes';
import commonRoutes from '../common/routes';
import eventRoutes from '../events/routes';

const routes: ReactRoute[] = [
  ...authRoutes,
  ...eventRoutes,
  ...commonRoutes, // must be last for 404 routing
];

const Routes = () => (
  <Switch>
    {
      routes.map((route, i) => (
        <Route 
          component={route.component}
          exact={route.exact}
          key={i}
          path={route.path}
        />
      ))
    }
  </Switch>
);

export default Routes;
