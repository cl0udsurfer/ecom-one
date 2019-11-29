import React from 'react';
import LayoutMain from '../../components/core/LayoutMain';

import { Card, Row, Col } from 'antd';
import { isAuthenticated } from '../../api/auth';

const Cart = () => {
  return (
    <LayoutMain title='User Dashboard' description='User Dashboard'>
      <p>Cart</p>
      <Row gutter={16}>
        <Col span={10}>
          <Card title='Your Cart' bordered={true}>
            Products
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Checkout' bordered={true}>
            Proceed to Checkout
          </Card>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default Cart;
