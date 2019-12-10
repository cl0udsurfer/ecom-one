import React from 'react';
import { Link } from 'react-router-dom';
import OrderSummary from './OrderSummary';

const CheckoutDetails = ({ values, handleChange, nextStep, cartItems }) => {
  return (
    <section class='section'>
      <div class='container pt-0 mt-n8'>
        <div class='row'>
          <div class='col-lg-8 pt-9'>
            <h4 class='mb-4 pb-3'>Shipping Information</h4>
            <form class='cozy'>
              <label class='control-label bold small text-uppercase text-secondary'>
                First Name
              </label>
              <div class='form-group has-icon'>
                <input
                  type='text'
                  id='login_username'
                  class='form-control form-control-rounded'
                  placeholder='Your First Name'
                  onChange={handleChange('firstName')}
                />
              </div>
              <label class='control-label bold small text-uppercase text-secondary'>
                Last Name
              </label>
              <div class='form-group has-icon'>
                <input
                  type='text'
                  id='login_username'
                  class='form-control form-control-rounded'
                  placeholder='Your Last Name'
                  onChange={handleChange('lastName')}
                />
              </div>
              <label class='control-label bold small text-uppercase text-secondary'>
                Address
              </label>
              <div class='form-group has-icon'>
                <input
                  type='text'
                  id='login_username'
                  class='form-control form-control-rounded'
                  placeholder='Your Shipping Address'
                  onChange={handleChange('address')}
                />
              </div>
              <label class='control-label bold small text-uppercase text-secondary'>
                Postal Code
              </label>
              <div class='form-group has-icon'>
                <input
                  type='text'
                  id='login_username'
                  class='form-control form-control-rounded'
                  placeholder='Postal Code'
                  onChange={handleChange('postalCode')}
                />
              </div>
              <label class='control-label bold small text-uppercase text-secondary'>
                City
              </label>
              <div class='form-group has-icon'>
                <input
                  type='text'
                  id='login_username'
                  class='form-control form-control-rounded'
                  placeholder='City'
                  onChange={handleChange('city')}
                />
              </div>
              <label class='control-label bold small text-uppercase text-secondary'>
                State
              </label>
              <div class='form-group has-icon'>
                <input
                  type='text'
                  id='login_username'
                  class='form-control form-control-rounded'
                  placeholder='State'
                  onChange={handleChange('state')}
                />
              </div>
            </form>
            <h4 class='my-5'>Shipping Method</h4>
            <div class='row gap-y'>
              <div class='col-md-6'>
                <div class='card'>
                  <div class='card-body'>
                    <div class='d-flex flex-column flex-sm-row align-items-sm-center'>
                      <div class='radio radio-primary'>
                        <input
                          class='form-control'
                          type='radio'
                          id='free-shipping'
                          name='shipping-options'
                          checked='checked'
                        />
                        <label
                          class='control-label text-darker'
                          for='free-shipping'
                        >
                          Free Shipping
                        </label>
                      </div>
                      <div class='ml-sm-auto'>
                        <span class='font-sm text-primary'>$0.00</span>
                      </div>
                    </div>
                    <p class='small text-muted my-0 ml-4'>
                      1 month - Tuesday, Dec 3rd 2019
                    </p>
                  </div>
                </div>
              </div>
              <div class='col-md-6'>
                <div class='card'>
                  <div class='card-body'>
                    <div class='d-flex flex-column flex-sm-row align-items-sm-center'>
                      <div class='radio radio-primary'>
                        <input
                          class='form-control'
                          type='radio'
                          id='standard-shipping'
                          name='shipping-options'
                        />
                        <label
                          class='control-label text-darker'
                          for='standard-shipping'
                        >
                          Standard Shipping
                        </label>
                      </div>
                      <div class='ml-sm-auto'>
                        <span class='font-sm text-primary'>$9.99</span>
                      </div>
                    </div>
                    <p class='small text-muted my-0 ml-4'>
                      2 weeks - Tuesday, Dec 3rd 2019
                    </p>
                  </div>
                </div>
              </div>
              <div class='col-md-6'>
                <div class='card'>
                  <div class='card-body'>
                    <div class='d-flex flex-column flex-sm-row align-items-sm-center'>
                      <div class='radio radio-primary'>
                        <input
                          class='form-control'
                          type='radio'
                          id='express-shipping'
                          name='shipping-options'
                        />
                        <label
                          class='control-label text-darker'
                          for='express-shipping'
                        >
                          Express Shipping
                        </label>
                      </div>
                      <div class='ml-sm-auto'>
                        <span class='font-sm text-primary'>$29.99</span>
                      </div>
                    </div>
                    <p class='small text-muted my-0 ml-4'>
                      3 days - Tuesday, Dec 3rd 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='row mt-5'>
              <div class='col-6'>
                <Link class='btn btn-light btn-block' to='/cart'>
                  <i class='fas fa-chevron-left mr-2'></i>
                  <span>Back to Cart</span>
                </Link>
              </div>
              <div class='col-6'>
                <button class='btn btn-primary btn-block' onClick={nextStep}>
                  <span class='mr-2'>Proceed to Payment</span>
                  <i class='fas fa-chevron-right'></i>
                </button>
              </div>
            </div>
          </div>
          <OrderSummary values={values} cartItems={cartItems} />
        </div>
      </div>
    </section>
  );
};

export default CheckoutDetails;
