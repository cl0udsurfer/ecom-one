import React, { useState, useEffect } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import { Link } from 'react-router-dom';

import { Card, Row, Col } from 'antd';
import { isAuthenticated } from '../../api/auth';
import { getProduct } from '../../api/admin';
import AddToCartButton from '../../components/cart/AddToCartButton';

const ProductPage = props => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

  const loadSingleProduct = productId => {
    getProduct(productId).then(data => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setProduct(data.data);
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, []);

  return (
    <LayoutMain title='Product Page' description='Product Page'>
      <p>Product Page</p>
      <Row gutter={16}>
        <Col span={10}>
          <Card title='Product Page' bordered={true}>
            Productimage
            <br />
            Productname: {product.name}
            <br />
            Description: {product.description}
          </Card>
        </Col>
        <Col span={8}>
          {!isAuthenticated() && (
            <Card title='Options' bordered={true}>
              Please <Link to='/signin'>Signin</Link> to add this Product to
              your Cart
            </Card>
          )}
          {isAuthenticated() && (
            <Card title='Options' bordered={true}>
              <AddToCartButton product={product} />
              <br />
              Or
              <br />
              <Link to='/cart'>View Cart</Link>
            </Card>
          )}
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default ProductPage;
