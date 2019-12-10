import React from 'react';
import { Link } from 'react-router-dom';

import OrderSummary from './OrderSummary';

const CheckoutPayment = ({ prevStep, nextStep, cartItems }) => {
  return (
    <section class='section'>
      <div class='container pt-0 mt-n8'>
        <div class='row'>
          <div class='col-lg-8 pt-9'>
            <h4 class='mb-5'>Payment Selection</h4>
            <div
              class='accordion accordion-clean accordion-collapsed'
              id='payment-options'
            >
              <div class='card'>
                <div class='card-header'>
                  <div class='card-title'>
                    <div class='d-flex align-items-center'>
                      <div class='radio radio-primary'>
                        <input
                          class='form-control'
                          type='radio'
                          id='po-credit-card'
                          name='payment-options'
                          checked='checked'
                        />
                        <label
                          class='control-label text-darker'
                          for='po-credit-card'
                          data-toggle='collapse'
                          data-target='#clp-payment-credit-card'
                        >
                          Credit Card
                        </label>
                      </div>
                    </div>
                    <p class='small text-muted my-0 ml-4'>
                      Pay with Visa, Amex, MasterCard and many other credit and
                      debit cards
                    </p>
                  </div>
                </div>
                <div
                  id='clp-payment-credit-card'
                  class='collapse show'
                  data-parent='#payment-options'
                >
                  <div class='card-body'>
                    <div class='row gap-y align-items-center'>
                      <div class='col-md-7'>
                        <div class='card-wrapper'></div>
                      </div>
                      <div class='col-md-5'>
                        <form class='checkout-cc-payment-form'>
                          <div class='form-group'>
                            <label
                              for='card-number'
                              class='control-label small bold'
                            >
                              Card Number
                            </label>
                            <input
                              class='form-control'
                              type='text'
                              name='number'
                              placeholder='Card Number'
                              required
                            />
                          </div>
                          <div class='form-group'>
                            <label
                              for='card-holder-name'
                              class='control-label small bold'
                            >
                              Card Holder Name
                            </label>
                            <input
                              class='form-control'
                              type='text'
                              name='name'
                              placeholder='Card holder name'
                              required
                            />
                          </div>
                          <div class='form-row'>
                            <div class='form-group col-sm-6'>
                              <label
                                for='expiration'
                                class='control-label small bold'
                              >
                                Expiration
                              </label>
                              <input
                                class='form-control'
                                type='text'
                                name='expiry'
                                placeholder='MM/YY'
                                required
                              />
                            </div>
                            <div class='form-group col-sm-6'>
                              <label for='cvc' class='control-label small bold'>
                                CVC
                              </label>
                              <input
                                class='form-control'
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
              <div class='card'>
                <div class='card-header'>
                  <div class='card-title'>
                    <div class='d-flex align-items-center'>
                      <div class='radio radio-primary'>
                        <input
                          class='form-control'
                          type='radio'
                          id='po-paypal'
                          name='payment-options'
                        />
                        <label
                          class='control-label text-darker'
                          for='po-paypal'
                          data-toggle='collapse'
                          data-target='#clp-payment-paypal'
                        >
                          Paypal
                        </label>
                      </div>
                    </div>
                    <p class='small text-muted my-0 ml-4'>
                      Pay easily, fast and secure with PayPal
                    </p>
                  </div>
                </div>
                <div
                  id='clp-payment-paypal'
                  class='collapse'
                  data-parent='#payment-options'
                >
                  <div class='card-body text-center'>
                    <p class='text-muted'>
                      You will be redirected to PayPal website to complete the
                      payment
                    </p>
                    <button class='btn btn-info' type='button'>
                      <i class='fab fa-paypal mr-2'></i> Take me to PayPal
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class='row mt-5'>
              <div class='col-6'>
                <Link class='btn btn-light btn-block' onClick={prevStep}>
                  <i class='fas fa-chevron-left mr-2'></i>
                  <span>Back to Details</span>
                </Link>
              </div>
              <div class='col-6'>
                <button class='btn btn-primary btn-block' onClick={nextStep}>
                  <span class='mr-2'>Confirm your Order</span>
                  <i class='fas fa-chevron-right'></i>
                </button>
              </div>
            </div>
          </div>
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </section>
  );
};
export default CheckoutPayment;
