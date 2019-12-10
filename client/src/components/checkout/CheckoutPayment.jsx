import React from 'react';
import { Link } from 'react-router-dom';

import OrderSummary from './OrderSummary';

const CheckoutPayment = ({ values, prevStep, nextStep }) => {
  return (
    <div className='col-lg-8 pt-9'>
      <h4 className='mb-5'>Payment Selection</h4>
      <div
        className='accordion accordion-clean accordion-collapsed'
        id='payment-options'
      >
        <div className='card'>
          <div className='card-header'>
            <div className='card-title'>
              <div className='d-flex align-items-center'>
                <div className='radio radio-primary'>
                  <input
                    className='form-control'
                    type='radio'
                    id='po-credit-card'
                    name='payment-options'
                    checked='checked'
                  />
                  <label
                    className='control-label text-darker'
                    for='po-credit-card'
                    data-toggle='collapse'
                    data-target='#clp-payment-credit-card'
                  >
                    Credit Card
                  </label>
                </div>
              </div>
              <p className='small text-muted my-0 ml-4'>
                Pay with Visa, Amex, MasterCard and many other credit and debit
                cards
              </p>
            </div>
          </div>
          <div
            id='clp-payment-credit-card'
            className='collapse show'
            data-parent='#payment-options'
          >
            <div className='card-body'>
              <div className='row gap-y align-items-center'>
                <div className='col-md-7'>
                  <div className='card-wrapper'></div>
                </div>
                <div className='col-md-5'>
                  <form className='checkout-cc-payment-form'>
                    <div className='form-group'>
                      <label
                        for='card-number'
                        className='control-label small bold'
                      >
                        Card Number
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        name='number'
                        placeholder='Card Number'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label
                        for='card-holder-name'
                        className='control-label small bold'
                      >
                        Card Holder Name
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        name='name'
                        placeholder='Card holder name'
                        required
                      />
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-sm-6'>
                        <label
                          for='expiration'
                          className='control-label small bold'
                        >
                          Expiration
                        </label>
                        <input
                          className='form-control'
                          type='text'
                          name='expiry'
                          placeholder='MM/YY'
                          required
                        />
                      </div>
                      <div className='form-group col-sm-6'>
                        <label for='cvc' className='control-label small bold'>
                          CVC
                        </label>
                        <input
                          className='form-control'
                          type='text'
                          name='cvc'
                          placeholder='CVC'
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-header'>
            <div className='card-title'>
              <div className='d-flex align-items-center'>
                <div className='radio radio-primary'>
                  <input
                    className='form-control'
                    type='radio'
                    id='po-paypal'
                    name='payment-options'
                  />
                  <label
                    className='control-label text-darker'
                    for='po-paypal'
                    data-toggle='collapse'
                    data-target='#clp-payment-paypal'
                  >
                    Paypal
                  </label>
                </div>
              </div>
              <p className='small text-muted my-0 ml-4'>
                Pay easily, fast and secure with PayPal
              </p>
            </div>
          </div>
          <div
            id='clp-payment-paypal'
            className='collapse'
            data-parent='#payment-options'
          >
            <div className='card-body text-center'>
              <p className='text-muted'>
                You will be redirected to PayPal website to complete the payment
              </p>
              <button className='btn btn-info' type='button'>
                <i className='fab fa-paypal mr-2'></i> Take me to PayPal
              </button>
            </div>
          </div>
        </div>
      </div>
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
