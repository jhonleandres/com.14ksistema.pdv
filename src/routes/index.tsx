import * as React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Sale from '../pages/Sale';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/sale" component={Sale} />

  </Switch>
);

export default Routes;