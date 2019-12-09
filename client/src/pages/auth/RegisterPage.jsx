import React from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import RegisterForm from '../../components/auth/RegisterForm';

const RegisterPage = () => {
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
                  Get started with <span class='bold d-block'>Dashcore</span>
                </h2>
                <p class='lead text-contrast'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class='col-md-5 col-lg-4 mx-auto'>
              <div class='register-form mt-5 mt-md-0'>
                <img
                  src='img/logo.png'
                  class='logo img-responsive mb-4 mb-md-6'
                  alt=''
                />
                <h1 class='text-darker bold'>Register</h1>
                <p class='text-secondary mb-4 mb-md-6'>
                  Already have an account?
                  <Link to='/login' class='text-primary bold'>
                    Login here
                  </Link>
                </p>
                <RegisterForm />
                <div class='mt-5'>
                  <p class='small text-secondary'>
                    By signing up, I agree to the
                    <a href='#'>Terms of Service</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutMain>
  );
};

export default RegisterPage;
