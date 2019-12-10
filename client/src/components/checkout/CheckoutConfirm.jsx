import React from 'react';

import OrderSummary from './OrderSummary';

const CheckoutConfirm = ({ values, cartItems }) => {
  return (
    <section class='section'>
      <div class='container pt-0 mt-n8'>
        <div class='row'>
          <div class='col-lg-8 pt-9'>
            <h4 class='mb-5'>Confirm your Order</h4>
            {cartItems.map((items, i) => (
              <div class='row border-bottom py-4' key={i}>
                <div class='col-md-8 col-lg-9 col-xl-10'>
                  <div class='media d-block text-center d-sm-flex text-sm-left'>
                    <a class='mr-sm-4' href='javascript:;'>
                      <img
                        src='assets/img/shop/products/computerconnection.png'
                        class='img-responsive mx-auto'
                        style={{ maxWidth: '120px' }}
                        alt=''
                      />
                    </a>
                    <div class='media-body'>
                      <a
                        class='product-category text-muted font-xs'
                        href='javascript:;'
                      >
                        Wireless &amp; Bluetooth
                      </a>
                      <h6 class='product-title bold'>
                        <a href='javascript:;' class='text-darker'>
                          {items.name}
                        </a>
                      </h6>
                      <div class='text-primary light lead mt-3'>
                        <span>${items.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-4 col-lg-3 col-xl-2'>
                  Quantity: <span>1</span>
                </div>
              </div>
            ))}
          </div>
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </section>
  );
};

export default CheckoutConfirm;
