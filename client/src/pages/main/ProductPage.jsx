import React, { useState, useEffect } from 'react';
import LayoutMain from '../../components/core/LayoutMain';

import { Card, Row, Col } from 'antd';
import { isAuthenticated } from '../../api/auth';
import { getProduct } from '../../api/admin';

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
            Productname: {product.name}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Checkout' bordered={true}>
            Add to Cart
          </Card>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default ProductPage;
