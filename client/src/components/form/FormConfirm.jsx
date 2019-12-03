import React, { Fragment } from 'react';
import CartList from '../../components/cart/CartList';

import { Card, Button } from 'antd';

const FormConfirm = ({ values, prevStep }) => {
  return (
    <Fragment>
      <h2>Confirm</h2>
      <Card title='Confirm Information' bordered={true}>
        First Name: {values.firstName}
        <br />
        Last Name: {values.lastName}
        <br />
        Address: {values.address}
        <br />
        Postal Code: {values.postalCode}
        <br />
        City: {values.city}
        <br />
        State: {values.state}
        <br />
        <br />
        <br />
        <h3>Products</h3>
        {values.cartItems.map(c => (
          <CartList item={c} />
        ))}
        <br />
        <br />
        Total: {values.total}€
      </Card>
      <Button
        onClick={prevStep}
        type='primary'
        htmlType='submit'
        className='login-form-button'
      >
        Go Back
      </Button>
    </Fragment>
  );
};

export default FormConfirm;
