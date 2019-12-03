import React from 'react';
import { Link } from 'react-router-dom';

import { List } from 'antd';

import { removeItem } from '../../api/cart';

const CartList = ({ item }) => {
  return (
    <List.Item
      actions={[
        <button
          onClick={() => {
            removeItem(item._id);
            window.location.reload();
          }}
        >
          Remove
        </button>
      ]}
    >
      <List.Item.Meta
        title={<Link to={`/product/${item._id}`}>{item.name}</Link>}
      />
    </List.Item>
  );
};

export default CartList;
