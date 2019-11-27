import React from 'react';

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
        <Icon type='setting' key='setting' />,
        <Icon type='edit' key='edit' />,
        <Icon type='ellipsis' key='ellipsis' />
      ]}
    >
      <Meta title='Name' description='Description' />
    </Card>
  );
};

export default ProductCard;
