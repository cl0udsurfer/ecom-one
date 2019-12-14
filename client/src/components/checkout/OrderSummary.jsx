import React, { useState, useEffect } from 'react';
import ShowImage from '../../api/showImage';

const OrderSummary = ({
  values,
  cartItems,
  prices,
  buy,
  setRun = f => f,
  run = undefined
}) => {
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
                      <ShowImage
                        className='img-responsive mx-auto'
                        style={{ maxWidth: '50px' }}
                        product={item}
                      />
                    </a>
                    <div className='media-body'>
                      <a
                        className='product-category text-muted font-xs'
                        href='javascript:;'
                      >
                        {item.category.name}
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
                  <span className='text-right'>${prices.subtotal}</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Taxes:</span>
                  <span className='text-right'>${prices.taxes}</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Discount:</span>
                  <span className='text-right'>—</span>
                </li>
              </ul>
              <h3 className='text-right my-4'>${prices.total}</h3>
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
                  <span className='text-right'>${prices.subtotal}</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Taxes:</span>
                  <span className='text-right'>${prices.taxes}</span>
                </li>
                <li className='d-flex justify-content-between align-items-center'>
                  <span className='mr-2'>Discount:</span>
                  <span className='text-right'>—</span>
                </li>
              </ul>
              <h4 className='d-flex align-items-center mt-2 mb-4 text-success'>
                <span className='mr-auto h6 mb-0'>Total Amount</span>
                <span>${prices.total}</span>
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
              <p className='small text-muted my-0'>2 weeks duration</p>
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
          <button onClick={buy} className='btn btn-primary btn-block'>
            Place Order
          </button>
          <p className='text-muted small'>
            Once you click 'Place Order' your credit card will be charged for
            the total amount
          </p>
        </aside>
      );
  }
};

export default OrderSummary;
