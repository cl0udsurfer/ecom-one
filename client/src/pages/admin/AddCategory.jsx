import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import { isAuthenticated } from '../../api/auth';
import { addCategory } from '../../api/admin';

import { Form, Input, Button, Alert } from 'antd';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = e => {
    setError('');
    setName(e.target.value);
  };

  const clickSubmit = e => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    // make request to api to create category
    addCategory(user._id, token, { name }).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setError('');
        setSuccess(true);
      }
    });
  };

  const showSuccess = () => (
    <Alert
      message='{name} added successfully'
      type='success'
      showIcon
      style={{ display: success ? '' : 'none' }}
    />
  );

  const showError = () => (
    <Alert
      message='Failed to create Category'
      type='error'
      showIcon
      style={{ display: error ? '' : 'none' }}
    />
  );

  return (
    <LayoutMain title='Add Category' description='Add Category'>
      <p>Add a new Category</p>
      {showError()}
      {showSuccess()}
      <Form className='form' onSubmit={clickSubmit}>
        <Form.Item>
          <Input placeholder='Category' onChange={handleChange} value={name} />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Add Category
          </Button>
          Or <Link to='/admin/dashboard'>Go back</Link>
        </Form.Item>
      </Form>
    </LayoutMain>
  );
};

export default AddCategory;
