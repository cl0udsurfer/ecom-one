import React, { useState, useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import { isAuthenticated } from '../../api/auth';
import { addProduct, getCategories, getProducts } from '../../api/admin';
import ProductList from '../../components/admin/ProductList';

import { Form, Input, Button, Alert, Select, Card, Row, Col, List } from 'antd';
const { Option } = Select;

const AddProduct = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      description: '',
      category: '',
      price: ''
    }
  );
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  // load categories and set form data
  const init = () => {
    getCategories().then(data => {
      console.log(data.data);
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data.data);
      }
    });
    getProducts().then(data => {
      console.log(data.data);
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data.data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = evt => {
    const { name, value } = evt.target;

    setUserInput({ [name]: value });
  };

  const clickSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify(userInput));
    // make request to api to create product
    addProduct(user._id, token, JSON.stringify(userInput)).then(data => {
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
      message='Product added successfully'
      type='success'
      showIcon
      style={{ display: success ? '' : 'none' }}
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
            name='name'
            onChange={handleChange}
            placeholder='Name'
            value={userInput.name}
          />
        </Form.Item>
        <Form.Item>
          <Input
            name='description'
            onChange={handleChange}
            placeholder='Description'
            value={userInput.description}
          />
        </Form.Item>
        <Form.Item>
          <Select placeholder='Select category'>
            {categories &&
              categories.map((category, i) => {
                return (
                  <Option name='category' key={i} value={category.id}>
                    {category.name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>

        <Form.Item>
          <Input
            name='price'
            onChange={handleChange}
            placeholder='Price'
            value={userInput.price}
            type='number'
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
          <br />
          Or <Link to='/admin/dashboard'>Go back</Link>
        </Form.Item>
      </Form>
      <Row>
        <Col>
          <Card title='Products' bordered={true}>
            {products &&
              products.map((product, i) => {
                return <ProductList key={i} product={product} />;
              })}
          </Card>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default AddProduct;
