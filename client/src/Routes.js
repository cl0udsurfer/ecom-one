import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import Home from './pages/main/Home';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import PrivateRoute from './utils/PrivateRoute';
import AdminRoute from './utils/AdminRoute';
import AddCategory from './pages/admin/AddCategory';
import AddProduct from './pages/admin/AddProduct';
import Cart from './pages/user/Cart';
import ProductPage from './pages/main/ProductPage';
import ShopPage from './pages/main/ShopPage';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/product/:productId' exact component={ProductPage} />
          <PrivateRoute
            path='/user/dashboard'
            exact
            component={UserDashboard}
          />
          <PrivateRoute path='/cart' exact component={Cart} />
          <AdminRoute
            path='/admin/dashboard'
            exact
            component={AdminDashboard}
          />
          <AdminRoute
            path='/admin/create/category'
            exact
            component={AddCategory}
          />
          <AdminRoute
            path='/admin/create/product'
            exact
            component={AddProduct}
          />
          <Route path='/signup' exact component={Signup} />
          <Route path='/signin' exact component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
