import React from 'react';
import { Link } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';

import OrderSummary from './OrderSummary';

const CheckoutPayment = ({ values, prevStep, nextStep }) => {
  return (
    <div className='col-lg-8 pt-9'>
      <h4 className='mb-1 mt-3'>Payment Selection</h4>

      <DropIn
        options={{
          authorization: values.braintreeClientToken,
          paypal: {
            flow: 'vault'
          }
        }}
        onInstance={instance => (values.instance = instance)}
      />

      <div className='row mt-5'>
        <div className='col-6'>
          <Link className='btn btn-light btn-block' onClick={prevStep}>
            <i className='fas fa-chevron-left mr-2'></i>
            <span>Back to Details</span>
          </Link>
        </div>
        <div className='col-6'>
          <button className='btn btn-primary btn-block' onClick={nextStep}>
            <span className='mr-2'>Confirm your Order</span>
            <i className='fas fa-chevron-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPayment;
