import React from 'react';

import { List } from 'antd';

const EditCategory = () => {
  return (
    <List.Item
      actions={[
        <a key='list-loadmore-edit'>Edit</a>,
        <a key='list-loadmore-more'>Delete</a>
      ]}
    >
      <List.Item.Meta title={<a href='#'>Name</a>} />
    </List.Item>
  );
};

export default EditCategory;
