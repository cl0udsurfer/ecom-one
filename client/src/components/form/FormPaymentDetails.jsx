import React, { Fragment } from 'react';

import { Form, Input, Button } from 'antd';

const FormPaymentDetails = ({ nextStep, prevStep }) => {
  return (
    <Fragment>
      <h2>Payment</h2>
      <Form.Item>
        <Button
          onClick={prevStep}
          type='primary'
          htmlType='submit'
          className='login-form-button'
        >
          Go Back
        </Button>
        <Button
          onClick={nextStep}
          type='primary'
          htmlType='submit'
          className='login-form-button'
        >
          Next Step
        </Button>
      </Form.Item>
    </Fragment>
  );
};

export default FormPaymentDetails;
