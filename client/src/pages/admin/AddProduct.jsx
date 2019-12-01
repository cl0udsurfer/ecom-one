import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import { isAuthenticated } from '../../api/auth';
import { addProduct, getCategories, getProducts } from '../../api/admin';
import ProductList from '../../components/admin/ProductList';

import { Form, Input, Button, Alert, Card, Row, Col, Radio } from 'antd';

const AddProduct = () => {
  const [products, setProducts] = useState([]);
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
    formData: ''
  });

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };

  const { user, token } = isAuthenticated();

  const {
    name,
    description,
    price,
    categories,
    category,
    quantity,
    loading,
    error,
    formData
  } = values;

  // load categories and set form data
  const init = () => {
    getCategories().then(data => {
      console.log(data.data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data.data,
          formData: new FormData()
        });
      }
    });
    getProducts().then(data => {
      console.log(data.data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setProducts(data.data);
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
          createdProduct: data.name
        });
        window.location.reload();
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
        <Form.Item extra='Max Filesize:' wrapperCol={{ span: 12 }}>
          <div>Upload Photo</div>
          <Input
            type='file'
            name='photo'
            listType='picture'
            onChange={handleChange('photo')}
            accept='image/*'
          />
        </Form.Item>
        <Form.Item>
          <Input
            name='name'
            onChange={handleChange('name')}
            placeholder='Name'
            value={name}
          />
        </Form.Item>
        <Form.Item>
          <Input
            name='description'
            onChange={handleChange('description')}
            placeholder='Description'
            value={description}
          />
        </Form.Item>
        <Form.Item>
          <p>Select Category:</p>
          <Radio.Group name='category' onChange={handleChange('category')}>
            {categories &&
              categories.map((c, i) => (
                <Radio key={i} style={radioStyle} value={c.id}>
                  {c.name}
                </Radio>
              ))}
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Input
            name='price'
            onChange={handleChange('price')}
            placeholder='Price'
            value={price}
            type='number'
          />
        </Form.Item>
        <Form.Item>
          <Input
            name='quantity'
            onChange={handleChange('quantity')}
            placeholder='Quantity'
            value={quantity}
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
