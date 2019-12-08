import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/core/Home';
import PrivateRoute from './utils/PrivateRoute';
import AdminRoute from './utils/AdminRoute';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
