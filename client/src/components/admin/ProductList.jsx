import React, { useState } from 'react';

import { List } from 'antd';

import { isAuthenticated } from '../../api/auth';
import { removeProduct } from '../../api/admin';

const ProductList = ({ product }) => {
  const [error, setError] = useState(false);

  const { token } = isAuthenticated();

  return (
    <List.Item
      actions={[
        <button
          onClick={() => {
            removeProduct(token, product._id).then(data => {
              if (data.error) {
                setError(data.error);
              } else {
                setError('');
                window.location.reload();
              }
            });
          }}
        >
          Delete
        </button>
      ]}
    >
      <List.Item.Meta title={product.name} />
    </List.Item>
  );
};

export default ProductList;
