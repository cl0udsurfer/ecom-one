import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import CartList from '../../components/core/CartList';

import { isAuthenticated } from '../../api/auth';
import { getCart } from '../../api/cart';

const CartPage = () => {
  const [success, setSuccess] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cartItems = getCart();
    setItems(cartItems);
    console.log(cartItems);
  }, []);

  const showItemsLength = cartItems => {
    return <p class='mb-0 text-muted'>{items.length} items</p>;
  };

  const removeAlert = () => {
    return (
      <div
        style={{ display: success ? '' : 'none' }}
        class='alert alert-warning'
        role='alert'
      >
        Product removed from Cart
      </div>
    );
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
              <div class='col-md-2'>{showItemsLength()}</div>
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
                {removeAlert()}
                {items.map((items, i) => {
                  return <CartList key={i} items={items} />;
                })}
              </div>
              <aside class='col-lg-4 pt-4 pt-lg-0'>
                <div class='card shadow border-0 rounded-lg'>
                  <div class='card-body'>
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
