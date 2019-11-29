import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Icon } from 'antd';

const { Meta } = Card;

const ProductCard = ({ product }) => {
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
        <button>Add to Cart</button>,
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
