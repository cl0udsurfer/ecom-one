import React, { Fragment } from 'react';

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
