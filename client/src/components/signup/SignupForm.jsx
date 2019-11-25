import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Form, Input, Checkbox, Button, Alert } from 'antd';

import { register } from '../../api/auth';

const SignupForm = () => {
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

  const showSuccess = () => (
    <Alert message='New Account created successfully. Please Signin' type='success' showIcon style={{display: success ? "" : "none"}} />
  );

  const showError = () => <Alert message={error} type='error' showIcon style={{display: error ? "" : "none"}} />;

  return (
    <Form {...formItemLayout}>
      {showSuccess()}
      {showError()}
      <Form.Item label='Name'>
        <Input onChange={handleChange('name')} value={name} />
      </Form.Item>
      <Form.Item label='E-mail'>
        <Input onChange={handleChange('email')} value={email} />
      </Form.Item>
      <Form.Item label='Password'>
        <Input.Password onChange={handleChange('password')} value={password} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Checkbox>I have read the agreement</Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' onClick={clickSubmit}>
          Register
        </Button>
      </Form.Item>
      {JSON.stringify(values)}
    </Form>
  );
};

export default SignupForm;
