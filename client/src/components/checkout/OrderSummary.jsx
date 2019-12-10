import React, { useState, useEffect } from 'react';

const OrderSummary = ({ values, cartItems }) => {
  let step = values.step;
  switch (step) {
    case 1:
    case 2:
      return (
        <aside className='col-lg-4 pt-4 pt-lg-0'>
          <div className='card shadow border-0 rounded-lg'>
            <div className='card-body'>
              <h6>Order Summary</h6>
              {cartItems.map((item, i) => (
                <div className='border-bottom py-3' key={i}>
                  <div className='media d-block text-center d-sm-flex text-sm-left'>
                    <a className='mr-sm-4' href='javascript:;'>
                      <img
                        src='assets/img/shop/products/computerconnection.png'
                        className='img-responsive mx-auto'
                        style={{ maxWidth: '80px' }}
                        alt=''
                      />
                    </a>
                    <div className='media-body'>
                      <a
                        className='product-category text-muted font-xs'
                        href='javascript:;'
                      >
                        Category
                      </a>
                      <h6 className='product-title bold d-flex'>
                        <a href='javascript:;' className='text-darker mr-auto'>
                          {item.name}
                        </a>
                        <span className='badge badge-light badge-pill light'>
                          x 1
                        </span>
                      </h6>
                      <div className='text-primary light mt-3'>
                        <span>${item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='card-body'>
              <ul className='list-unstyled font-size-sm pb-2 border-bottom'>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Subtotal:</span>
                  <span className='text-right'>$654</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Shipping:</span>
                  <span className='text-right'>${values.shipping}</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Taxes:</span>
                  <span className='text-right'>$3</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Discount:</span>
                  <span className='text-right'>—</span>
                </li>
              </ul>
              <h3 className='text-right my-4'>$657</h3>
            </div>
          </div>
        </aside>
      );

    case 3:
      return (
        <aside className='col-lg-4 pt-4 pt-lg-0'>
          <div className='card shadow border-0 rounded-lg mb-4'>
            <div className='card-body'>
              <h6 className='mb-4 text-uppercase'>Order summary</h6>
              <ul className='list-unstyled font-sm pb-2 border-bottom'>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Subtotal:</span>
                  <span className='text-right'>$654</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Shipping:</span>
                  <span className='text-right'>${values.shipping}</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Taxes:</span>
                  <span className='text-right'>$3</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Discount:</span>
                  <span className='text-right'>—</span>
                </li>
              </ul>
              <h4 className='d-flex align-items-center mt-2 mb-4 text-success'>
                <span className='mr-auto h6 mb-0'>Total Amount</span>
                <span>$657</span>
              </h4>
            </div>
            <div className='card-body'>
              <h6 className='mb-4 text-uppercase'>Shipping Method</h6>
              <div className='d-flex flex-column flex-sm-row align-items-sm-center'>
                <p className='mb-0'>Free Shipping</p>
                <div className='ml-sm-auto'>
                  <span className='font-sm text-primary'>$0.00</span>
                </div>
              </div>
              <p className='small text-muted my-0'>
                1 month - Tuesday, Dec 3rd 2019
              </p>
            </div>
            <div className='card-body'>
              <h6 className='mb-4 text-uppercase'>Shipping Address</h6>
              <address>
                {values.firstName} {values.lastName}
                <br />
                {values.address}
                <br />
                {values.city}
                <br />
                {values.postalCode}
                <br />
              </address>
            </div>
            <div className='card-body'>
              <h6 className='mb-4 text-uppercase'>Payment Method</h6>
              <p className='mr-2'>Credit Card</p>
            </div>
          </div>
          <button className='btn btn-primary btn-block'>Place Order</button>
          <p className='text-muted small'>
            Once you click 'Place Order' your credit card will be charged for
            the total amount
          </p>
        </aside>
      );
  }
};

export default OrderSummary;
