import React from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <LayoutMain>
      <main>
        <div class='container-fluid'>
          <div class='row align-items-center'>
            <div
              class='col-md-6 col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient gradient-purple-navy alpha-7 image-background cover'
              style={{
                backgroundImage:
                  'url(https://picsum.photos/1920/1200/?random&gravity=south)'
              }}
            >
              <div class='content'>
                <h2 class='display-4 display-md-3 text-contrast mt-4 mt-md-0'>
                  Welcome to <span class='bold d-block'>Ecom-One</span>
                </h2>
                <p class='lead text-contrast'>Login to your account</p>
              </div>
            </div>
            <div class='col-md-5 col-lg-4 mx-auto'>
              <div class='login-form mt-5 mt-md-0'>
                <img
                  src='img/logo.png'
                  class='logo img-responsive mb-4 mb-md-6'
                  alt=''
                />
                <h1 class='text-darker bold'>Login</h1>
                <p class='text-secondary mt-0 mb-4 mb-md-6'>
                  Don't have an account yet?
                  <Link to='/register' class='text-primary bold'>
                    Create it here
                  </Link>
                </p>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutMain>
  );
};

export default LoginPage;
