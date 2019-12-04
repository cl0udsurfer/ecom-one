import React, { Fragment } from 'react';
import DropIn from 'braintree-web-drop-in-react';
import { Form, Button } from 'antd';

const FormPaymentDetails = ({ values, nextStep, prevStep }) => {
  return (
    <Fragment>
      <h2>Payment</h2>
      <DropIn
        options={{
          authorization: values.braintreeClientToken
        }}
        onInstance={instance => (values.instance = instance)}
      />
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
