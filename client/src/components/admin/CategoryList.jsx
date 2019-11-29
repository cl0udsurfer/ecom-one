import React, { useState, useEffect } from 'react';

import { List } from 'antd';

import { isAuthenticated } from '../../api/auth';
import { removeCategory } from '../../api/admin';

const CategoryList = ({ category }) => {
  const [error, setError] = useState(false);

  const { token } = isAuthenticated();

  return (
    <List.Item
      actions={[
        <button
          onClick={() => {
            removeCategory(token, category.id).then(data => {
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
      <List.Item.Meta title={category.name} />
    </List.Item>
  );
};

export default CategoryList;
