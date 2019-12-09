import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import CartList from '../../components/core/CartList';

import { isAuthenticated } from '../../api/auth';
import { getCart } from '../../api/cart';

const CartPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cartItems = getCart();
    setItems(cartItems);
    console.log(cartItems);
  }, []);

  const showItemsLength = cartItems => {
    console.log(cartItems);
    return <p class='mb-0 text-muted'>{items.length} items</p>;
  };

  return (
    <LayoutMain>
      <main class='overflow-hidden'>
        <section class='page header bg-dark section'>
          <div class='container'>
            <div class='row gap-y align-items-center text-center text-md-left'>
              <div class='col-md-10'>
                <h1 class='regular text-contrast'>Your cart</h1>
              </div>
              <div class='col-md-2'>
                <h2 class='h1 text-contrast'>
                  $654.<sup>00</sup>
                </h2>
                {showItemsLength()}
              </div>
            </div>
          </div>
        </section>
        <section class='section'>
          <div class='container pt-0 mt-n8'>
            <div class='row'>
              <div class='col-lg-8 pt-8'>
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                  class='btn btn-outline-primary btn-block mt-4'
                  type='button'
                >
                  <i class='fas fa-redo mr-2'></i>Update cart
                </button>
                {items.map((item, i) => {
                  return <CartList key={i} item={item} />;
                })}
              </div>
              <aside class='col-lg-4 pt-4 pt-lg-0'>
                <div class='card shadow border-0 rounded-lg'>
                  <div class='card-body'>
                    <div
                      class='accordion accordion-clean accordion-collapsed'
                      id='cart-options'
                    >
                      <div class='card'>
                        <div class='card-header'>
                          <a
                            href='#'
                            class='card-title btn bold'
                            data-toggle='collapse'
                            data-target='#clp-shipping'
                          >
                            <i class='fas fa-angle-down angle'></i>Shipping
                            Options
                          </a>
                        </div>
                        <div
                          id='clp-shipping'
                          class='collapse show'
                          data-parent='#cart-options'
                        >
                          <div class='card-body'>
                            <form
                              class='form form-check-list'
                              method='post'
                              novalidate
                            >
                              <div class='form-group shadow-box p-3'>
                                <div class='d-flex flex-column flex-sm-row align-items-sm-center'>
                                  <div>
                                    <div class='radio radio-primary'>
                                      <input
                                        class='form-control'
                                        type='radio'
                                        id='free-shipping'
                                        name='shipping-options'
                                      />{' '}
                                      <label
                                        class='control-label text-darker'
                                        for='free-shipping'
                                      >
                                        Free Shipping
                                      </label>
                                    </div>
                                    <p class='small text-muted my-0'>
                                      1 month - Tuesday, Dec 3rd 2019
                                    </p>
                                  </div>
                                  <div class='ml-sm-auto'>
                                    <span class='font-sm text-primary'>
                                      $0.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class='form-group shadow-box p-3'>
                                <div class='d-flex flex-column flex-sm-row align-items-sm-center'>
                                  <div>
                                    <div class='radio radio-primary'>
                                      <input
                                        class='form-control'
                                        type='radio'
                                        id='standard-shipping'
                                        name='shipping-options'
                                      />{' '}
                                      <label
                                        class='control-label text-darker'
                                        for='standard-shipping'
                                      >
                                        Standard Shipping
                                      </label>
                                    </div>
                                    <p class='small text-muted my-0'>
                                      2 weeks - Tuesday, Dec 3rd 2019
                                    </p>
                                  </div>
                                  <div class='ml-sm-auto'>
                                    <span class='font-sm text-primary'>
                                      $9.99
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class='form-group shadow-box p-3'>
                                <div class='d-flex flex-column flex-sm-row align-items-sm-center'>
                                  <div>
                                    <div class='radio radio-primary'>
                                      <input
                                        class='form-control'
                                        type='radio'
                                        id='express-shipping'
                                        name='shipping-options'
                                      />{' '}
                                      <label
                                        class='control-label text-darker'
                                        for='express-shipping'
                                      >
                                        Express Shipping
                                      </label>
                                    </div>
                                    <p class='small text-muted my-0'>
                                      3 days - Tuesday, Dec 3rd 2019
                                    </p>
                                  </div>
                                  <div class='ml-sm-auto'>
                                    <span class='font-sm text-primary'>
                                      $29.99
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class='my-4' />
                    <div class='d-flex flex-wrap'>
                      <p class='bold text-darker text-uppercase'>Total</p>
                      <p class='h5 bold price ml-sm-auto'>$654.00</p>
                    </div>
                    {isAuthenticated() && (
                      <Link
                        to='/checkout'
                        class='btn btn-primary btn-block mt-4'
                        href='checkout-customer.html'
                      >
                        <i class='fas fa-credit-card mr-2'></i>Proceed to
                        Checkout
                      </Link>
                    )}
                    {!isAuthenticated() && (
                      <Link
                        to='/login'
                        class='btn btn-primary btn-block mt-4'
                        href='checkout-customer.html'
                      >
                        <i class='fas fa-credit-card mr-2'></i>Please Login to
                        checkout
                      </Link>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </LayoutMain>
  );
};

export default CartPage;
