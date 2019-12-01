import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Card } from 'antd';

import { addItem } from '../../api/cart';
import { isAuthenticated } from '../../api/auth';
import AddToCartButton from '../cart/AddToCartButton';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [redirect, setRedirect] = useState(false);

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
        <AddToCartButton product={product} />,
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
