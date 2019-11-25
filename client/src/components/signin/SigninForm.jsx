import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Form, Input, Button, Alert } from 'antd';

import { login, authenticate } from '../../api/auth';

const SigninForm = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };

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

  const showLoading = () =>
    loading && <Alert message='Loading...' type='success' showIcon />;

  const showError = () => (
    <Alert
      message={error}
      type='error'
      showIcon
      style={{ display: error ? '' : 'none' }}
    />
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to='/' />;
    }
  };

  return (
    <Form {...formItemLayout}>
      {showLoading()}
      {showError()}
      <Form.Item label='E-mail'>
        <Input onChange={handleChange('email')} value={email} />
      </Form.Item>
      <Form.Item label='Password'>
        <Input.Password onChange={handleChange('password')} value={password} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' onClick={clickSubmit}>
          Login
        </Button>
      </Form.Item>
      {JSON.stringify(values)}
      {redirectUser()}
    </Form>
  );
};

export default SigninForm;
