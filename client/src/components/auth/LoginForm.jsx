import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { login, authenticate } from '../../api/auth';

const LoginForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  });

  const { email, password, loading, error, redirectToReferrer } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    login({ email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true
          });
        });
      }
    });
  };

  const showLoading = () => {
    return (
      <div
        style={{ display: loading ? '' : 'none' }}
        class='alert alert-success'
        role='alert'
      >
        Loading...
      </div>
    );
  };

  const showError = () => {
    return (
      <div
        style={{ display: error ? '' : 'none' }}
        class='alert alert-danger'
        role='alert'
      >
        {error}
      </div>
    );
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to='/' />;
    }
  };

  return (
    <form class='cozy'>
      {showLoading()}
      {showError()}
      <label class='control-label bold small text-uppercase text-secondary'>
        Email
      </label>
      <div class='form-group has-icon'>
        <input
          type='email'
          id='login_username'
          onChange={handleChange('email')}
          value={email}
          class='form-control form-control-rounded'
          placeholder='Your registered email'
          required
        />
        <i class='icon fas fa-user'></i>
      </div>
      <label class='control-label bold small text-uppercase text-secondary'>
        Password
      </label>
      <div class='form-group has-icon'>
        <input
          type='password'
          id='login_password'
          onChange={handleChange('password')}
          value={password}
          class='form-control form-control-rounded'
          placeholder='Your password'
          required
        />
        <i class='icon fas fa-lock'></i>
      </div>
      <div class='form-group d-flex align-items-center justify-content-between'>
        <a href='#' class='text-warning small'>
          Forgot your password?
        </a>
        <div class='ajax-button'>
          <div class='fas fa-check btn-status text-success success'></div>
          <div class='fas fa-times btn-status text-danger failed'></div>
          <button
            type='submit'
            class='btn btn-primary btn-rounded'
            onClick={clickSubmit}
          >
            Login <i class='fas fa-long-arrow-alt-right ml-2'></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
