import React, { Fragment } from 'react';

import { Form, Input, Button } from 'antd';

const FormPersonalDetails = ({ values, handleChange, nextStep }) => {
  return (
    <Fragment>
      <h2>Personal Details</h2>
      <Form.Item>
        <Input
          name='firstName'
          placeholder='First Name'
          onChange={handleChange('firstName')}
        />
        <Input
          name='lastName'
          placeholder='Last Name'
          onChange={handleChange('lastName')}
        />
        <Input
          name='address'
          placeholder='Address'
          onChange={handleChange('address')}
        />
        <Input
          name='postalCode'
          placeholder='Postal Code'
          onChange={handleChange('postalCode')}
        />
        <Input name='city' placeholder='City' onChange={handleChange('city')} />
        <Input
          name='state'
          placeholder='State'
          onChange={handleChange('state')}
        />
      </Form.Item>
      <Form.Item>
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

export default FormPersonalDetails;
