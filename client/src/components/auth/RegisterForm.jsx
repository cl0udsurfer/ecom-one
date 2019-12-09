import React, { useState } from 'react';

import { register } from '../../api/auth';

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  });

  const { name, email, password, success, error } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    register({ name, email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        });
      }
    });
  };

  const showSuccess = () => {
    return (
      <div
        style={{ display: success ? '' : 'none' }}
        class='alert alert-success'
        role='alert'
      >
        New Account created successfully. Please Signin
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

  return (
    <form class='cozy'>
      {showSuccess()}
      {showError()}
      <div class='form-group has-icon'>
        <input
          type='text'
          id='register_username'
          class='form-control form-control-rounded'
          placeholder='Desired username'
          onChange={handleChange('name')}
          value={name}
        />
        <i class='icon fas fa-user-plus'></i>
      </div>
      <div class='form-group has-icon'>
        <input
          type='email'
          id='register_email'
          class='form-control form-control-rounded'
          placeholder='Valid email'
          onChange={handleChange('email')}
          value={email}
        />
        <i class='icon fas fa-envelope'></i>
      </div>
      <div class='form-group has-icon'>
        <input
          type='password'
          id='register_password'
          class='form-control form-control-rounded'
          placeholder='Password'
          onChange={handleChange('password')}
          value={password}
        />

        <i class='icon fas fa-lock'></i>
      </div>
      <div class='form-group d-flex align-items-center justify-content-between'>
        <button
          type='submit'
          class='btn btn-primary btn-rounded ml-auto'
          onClick={clickSubmit}
        >
          Register <i class='fas fa-long-arrow-alt-right ml-2'></i>
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
