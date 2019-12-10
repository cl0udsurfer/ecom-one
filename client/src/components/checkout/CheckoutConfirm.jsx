import React from 'react';

import OrderSummary from './OrderSummary';

const CheckoutConfirm = ({ cartItems }) => {
  return (
    <div className='col-lg-8 pt-9'>
      <h4 className='mb-5'>Confirm your Order</h4>
      {cartItems.map((items, i) => (
        <div className='row border-bottom py-4' key={i}>
          <div className='col-md-8 col-lg-9 col-xl-10'>
            <div className='media d-block text-center d-sm-flex text-sm-left'>
              <a className='mr-sm-4'>
                <img
                  src='assets/img/shop/products/computerconnection.png'
                  className='img-responsive mx-auto'
                  style={{ maxWidth: '120px' }}
                  alt=''
                />
              </a>
              <div className='media-body'>
                <a className='product-category text-muted font-xs'>
                  Wireless &amp; Bluetooth
                </a>
                <h6 className='product-title bold'>
                  <a className='text-darker'>{items.name}</a>
                </h6>
                <div className='text-primary light lead mt-3'>
                  <span>${items.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-lg-3 col-xl-2'>
            Quantity: <span>1</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutConfirm;
