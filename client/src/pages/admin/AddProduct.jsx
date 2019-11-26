import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import { isAuthenticated } from '../../api/auth';
import { addProduct, getCategories } from '../../api/admin';

import { Form, Input, Button, Alert } from 'antd';

const AddProduct = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    quantity: '',
    photo: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: ''
  });

  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData
  } = values;

  const { user, token } = isAuthenticated();

  // load categories and set form data
  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data,
          formData: new FormData()
        });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });

    addProduct(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          loading: false,
          createdProduct: data.name
        });
      }
    });
  };

  const showSuccess = () => (
    <Alert
      message='Product added successfully'
      type='success'
      showIcon
      style={{ display: loading ? '' : 'none' }}
    />
  );

  const showError = () => (
    <Alert
      message='Failed to create Product'
      type='error'
      showIcon
      style={{ display: error ? '' : 'none' }}
    />
  );

  return (
    <LayoutMain title='Add Product' description='Add Product'>
      <p>Add a new Product</p>
      {showError()}
      {showSuccess()}
      <Form className='form' onSubmit={clickSubmit}>
        <Form.Item>
          <Input
            placeholder='Name'
            onChange={handleChange('name')}
            value={name}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder='Description'
            onChange={handleChange('description')}
            value={description}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder='Price'
            onChange={handleChange('price')}
            value={price}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder='Category'
            onChange={handleChange('category')}
            value={category}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder='Quantity'
            onChange={handleChange('quantity')}
            value={quantity}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Add Product
          </Button>
          Or <Link to='/admin/dashboard'>Go back</Link>
        </Form.Item>
      </Form>
      {JSON.stringify(formData)}
    </LayoutMain>
  );
};

export default AddProduct;
