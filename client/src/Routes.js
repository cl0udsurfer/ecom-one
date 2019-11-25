import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import Home from './pages/main/Home';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/signin' exact component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;