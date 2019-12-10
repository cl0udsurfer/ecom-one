import React, { useState, useEffect } from 'react';

// TO DO: RENDER TWO VERSIONS OF ORDER SUMMARY

const OrderSummary = ({ values, cartItems }) => {
  return (
    <aside class='col-lg-4 pt-4 pt-lg-0'>
      <div class='card shadow border-0 rounded-lg'>
        <div class='card-body'>
          <h6>Order Summary</h6>
          {cartItems.map((item, i) => (
            <div class='border-bottom py-3' key={i}>
              <div class='media d-block text-center d-sm-flex text-sm-left'>
                <a class='mr-sm-4' href='javascript:;'>
                  <img
                    src='assets/img/shop/products/computerconnection.png'
                    class='img-responsive mx-auto'
                    style={{ maxWidth: '80px' }}
                    alt=''
                  />
                </a>
                <div class='media-body'>
                  <a
                    class='product-category text-muted font-xs'
                    href='javascript:;'
                  >
                    Category
                  </a>
                  <h6 class='product-title bold d-flex'>
                    <a href='javascript:;' class='text-darker mr-auto'>
                      {item.name}
                    </a>
                    <span class='badge badge-light badge-pill light'>x 1</span>
                  </h6>
                  <div class='text-primary light mt-3'>
                    <span>${item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class='card-body'>
          <ul class='list-unstyled font-size-sm pb-2 border-bottom'>
            <li class='d-flex justify-content-between align-items-center'>
              <span class='mr-2'>Subtotal:</span>
              <span class='text-right'>
                $654.<sup>00</sup>
              </span>
            </li>
            <li class='d-flex justify-content-between align-items-center'>
              <span class='mr-2'>Shipping:</span>
              <span class='text-right'>—</span>
            </li>
            <li class='d-flex justify-content-between align-items-center'>
              <span class='mr-2'>Taxes:</span>
              <span class='text-right'>
                $3.<sup>40</sup>
              </span>
            </li>
            <li class='d-flex justify-content-between align-items-center'>
              <span class='mr-2'>Discount:</span>
              <span class='text-right'>—</span>
            </li>
          </ul>
          <h3 class='text-right my-4'>
            $657.<sup>40</sup>
          </h3>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;
