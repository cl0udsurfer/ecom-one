import React from 'react';

import { List } from 'antd';

const ProductList = ({ product }) => {
  return (
    <List.Item
      actions={[
        <a key='list-loadmore-edit'>Edit</a>,
        <a key='list-loadmore-more'>Delete</a>
      ]}
    >
      <List.Item.Meta title={product.name} />
    </List.Item>
  );
};

export default ProductList;
