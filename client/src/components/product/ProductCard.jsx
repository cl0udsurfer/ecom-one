import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Card } from 'antd';

import { addItem } from '../../api/cart';
import { isAuthenticated } from '../../api/auth';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [redirect, setRedirect] = useState(false);

  const redirectToSignin = () => <Redirect to='/signin' />;

  const addToCart = () => {
    console.log('added');
    if (!isAuthenticated()) {
      redirectToSignin();
    } else {
      addItem(product, setRedirect(true));
    }
  };
  return (
    <Card
      style={{ width: 300, margin: 40 }}
      cover={
        <img
          alt='example'
          src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
        />
      }
      actions={[
        <button onClick={addToCart}>Add to Cart</button>,
        <Link to={`/product/${product._id}`}>View Product</Link>
      ]}
    >
      <Meta
        title={product.name}
        description={product.description.substring(0, 100)}
      />
    </Card>
  );
};

export default ProductCard;
