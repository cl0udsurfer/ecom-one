import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import Home from './pages/main/Home';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import PrivateRoute from './utils/PrivateRoute';
import AdminRoute from './utils/AdminRoute';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute
            path='/user/dashboard'
            exact
            component={UserDashboard}
          />
          <AdminRoute
            path='/admin/dashboard'
            exact
            component={AdminDashboard}
          />
          <Route path='/signup' exact component={Signup} />
          <Route path='/signin' exact component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
