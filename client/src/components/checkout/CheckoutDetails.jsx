import React from 'react';
import { Link } from 'react-router-dom';
import OrderSummary from './OrderSummary';

const CheckoutDetails = ({ values, handleChange, nextStep, cartItems }) => {
  return (
    <div className='col-lg-8 pt-9'>
      <h4 className='mb-4 pb-3'>Shipping Information</h4>
      <form className='cozy'>
        <label className='control-label bold small text-uppercase text-secondary'>
          First Name
        </label>
        <div className='form-group has-icon'>
          <input
            type='text'
            id='login_username'
            className='form-control form-control-rounded'
            placeholder='Your First Name'
            onChange={handleChange('firstName')}
          />
        </div>
        <label className='control-label bold small text-uppercase text-secondary'>
          Last Name
        </label>
        <div className='form-group has-icon'>
          <input
            type='text'
            id='login_username'
            className='form-control form-control-rounded'
            placeholder='Your Last Name'
            onChange={handleChange('lastName')}
          />
        </div>
        <label className='control-label bold small text-uppercase text-secondary'>
          Address
        </label>
        <div className='form-group has-icon'>
          <input
            type='text'
            id='login_username'
            className='form-control form-control-rounded'
            placeholder='Your Shipping Address'
            onChange={handleChange('address')}
          />
        </div>
        <label className='control-label bold small text-uppercase text-secondary'>
          Postal Code
        </label>
        <div className='form-group has-icon'>
          <input
            type='text'
            id='login_username'
            className='form-control form-control-rounded'
            placeholder='Postal Code'
            onChange={handleChange('postalCode')}
          />
        </div>
        <label className='control-label bold small text-uppercase text-secondary'>
          City
        </label>
        <div className='form-group has-icon'>
          <input
            type='text'
            id='login_username'
            className='form-control form-control-rounded'
            placeholder='City'
            onChange={handleChange('city')}
          />
        </div>
        <label className='control-label bold small text-uppercase text-secondary'>
          State
        </label>
        <div className='form-group has-icon'>
          <input
            type='text'
            id='login_username'
            className='form-control form-control-rounded'
            placeholder='State'
            onChange={handleChange('state')}
          />
        </div>
      </form>
      <h4 className='my-5'>Shipping Method</h4>
      <div className='row gap-y'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex flex-column flex-sm-row align-items-sm-center'>
                <div className='radio radio-primary'>
                  <input
                    className='form-control'
                    type='radio'
                    id='free-shipping'
                    name='shipping'
                    onChange={handleChange('shipping')}
                    value={0.0}
                  />
                  <label
                    className='control-label text-darker'
                    for='free-shipping'
                  >
                    Free Shipping
                  </label>
                </div>
                <div className='ml-sm-auto'>
                  <span className='font-sm text-primary'>$0.00</span>
                </div>
              </div>
              <p className='small text-muted my-0 ml-4'>Duration: 2 Weeks</p>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex flex-column flex-sm-row align-items-sm-center'>
                <div className='radio radio-primary'>
                  <input
                    className='form-control'
                    type='radio'
                    id='standard-shipping'
                    name='shipping'
                    onChange={handleChange('shipping')}
                    value={9.99}
                  />
                  <label
                    className='control-label text-darker'
                    for='standard-shipping'
                  >
                    Standard Shipping
                  </label>
                </div>
                <div className='ml-sm-auto'>
                  <span className='font-sm text-primary'>$9.99</span>
                </div>
              </div>
              <p className='small text-muted my-0 ml-4'>Duration: 1 Week</p>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex flex-column flex-sm-row align-items-sm-center'>
                <div className='radio radio-primary'>
                  <input
                    className='form-control'
                    type='radio'
                    id='express-shipping'
                    name='shipping'
                    onChange={handleChange('shipping')}
                    value={29.99}
                  />
                  <label
                    className='control-label text-darker'
                    for='express-shipping'
                  >
                    Express Shipping
                  </label>
                </div>
                <div className='ml-sm-auto'>
                  <span className='font-sm text-primary'>$29.99</span>
                </div>
              </div>
              <p className='small text-muted my-0 ml-4'>Duration: 1-2 Days</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-6'>
          <Link className='btn btn-light btn-block' to='/cart'>
            <i className='fas fa-chevron-left mr-2'></i>
            <span>Back to Cart</span>
          </Link>
        </div>
        <div className='col-6'>
          <button className='btn btn-primary btn-block' onClick={nextStep}>
            <span className='mr-2'>Proceed to Payment</span>
            <i className='fas fa-chevron-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
