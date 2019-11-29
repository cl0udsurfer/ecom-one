import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Card, Icon } from 'antd';

import { addItem } from '../../api/cart';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [redirect, setRedirect] = useState(false);

  const addToCart = () => {
    console.log('added');
    addItem(product, setRedirect(true));
  };
  return (
    <Card
      style={{ width: 300 }}
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