import React from 'react';
import { Route, Switch } from 'react-router-dom';

import commonRoutes from '../common/routes';

const routes = [
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
