import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/core/Home';
import PrivateRoute from './utils/PrivateRoute';
import AdminRoute from './utils/AdminRoute';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import CartPage from './pages/core/CartPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import ManageProducts from './pages/admin/ManageProducts';
import ManageCategories from './pages/admin/ManageCategories';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AdminRoute
            path='/admin/dashboard'
            exact
            component={AdminDashboard}
          />
          <AdminRoute
            path='/admin/manage/products'
            exact
            component={ManageProducts}
          />
          <AdminRoute
            path='/admin/manage/categories'
            exact
            component={ManageCategories}
          />
          <PrivateRoute
            path='/user/dashboard'
            exact
            component={UserDashboard}
          />
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/cart' exact component={CartPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
