import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import CartList from '../../components/cart/CartList';

import { Card, Row, Col } from 'antd';

import { getCart } from '../../api/cart';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cartItems = getCart();
    setItems(cartItems);
    console.log(cartItems);
  }, []);

  const showItems = cartItems => {
    console.log(cartItems);
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
      </div>
    );
  };

  return (
    <LayoutMain title='User Dashboard' description='User Dashboard'>
      <p>Cart</p>
      <Row gutter={16}>
        <Col span={10}>
          <Card title='Your Cart' bordered={true}>
            {showItems()}
            <div>
              {items.map((item, i) => {
                return <CartList key={i} item={item} />;
              })}
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Checkout' bordered={true}>
            <Link to='/checkout'>Continue to Checkout</Link>
          </Card>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default Cart;
