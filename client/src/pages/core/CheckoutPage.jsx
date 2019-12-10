import React, { useState, useEffect, Fragment } from 'react';
import { isAuthenticated } from '../../api/auth';
import {
  getBraintreeClientToken,
  processPayment,
  createOrder
} from '../../api/user';
import { getCart } from '../../api/cart';

import LayoutCheckout from '../../components/checkout/LayoutCheckout';
import CheckoutDetails from '../../components/checkout/CheckoutDetails';
import CheckoutPayment from '../../components/checkout/CheckoutPayment';
import CheckoutConfirm from '../../components/checkout/CheckoutConfirm';
import OrderSummary from '../../components/checkout/OrderSummary';

const CheckoutPage = () => {
  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, braintreeClientToken: data.clientToken });
      }
    });
  };

  const getCartItems = () => {
    let cart = getCart();
    setCartItems(cart);
  };

  const [values, setValues] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    state: '',
    shipping: '0',
    instance: {},
    subtotal: '',
    total: '',
    error: '',
    loading: false,
    success: false,
    braintreeClientToken: ''
  });
  const [cartItems, setCartItems] = useState([]);

  const {
    step,
    firstName,
    lastName,
    address,
    postalCode,
    city,
    state,
    shipping,
    subtotal,
    total,
    error,
    success,
    loading,
    braintreeClientToken
  } = values;

  useEffect(() => {
    getToken(userId, token);
    getCartItems();
  }, []);

  // Proceed to Next Step
  const nextStep = () => {
    setValues({ ...values, step: step + 1 });
  };

  // Go back to previous Step
  const prevStep = () => {
    setValues({ ...values, step: step + 1 });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const switchOperator = step => {
    switch (step) {
      case 1:
        return (
          <CheckoutDetails
            handleChange={handleChange}
            values={values}
            nextStep={nextStep}
            cartItems={cartItems}
          />
        );
      case 2:
        return (
          <CheckoutPayment
            values={values}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return <CheckoutConfirm values={values} cartItems={cartItems} />;
    }
  };

  return (
    <Fragment>
      <main class='overflow-hidden'>
        <section class='checkout-header page header bg-dark section'>
          <div class='container bring-to-front pt-5 pb-0'>
            <div class='page-title'>
              <h1 class='regular text-contrast'>Checkout</h1>
              <p class='mb-0 text-muted'>Checkout</p>
            </div>
            <nav class='nav navbar mt-4'>
              <a class='nav-item nav-link active'>
                <i class='far fa-address-card mr-2'></i>
                <span class='d-none d-md-inline'>Personal Details</span>
              </a>
              <a class='nav-item nav-link'>
                <i class='far fa-credit-card mr-2'></i>
                <span class='d-none d-md-inline'>Payment</span>
              </a>
              <a class='nav-item nav-link'>
                <i class='far fa-check-square mr-2'></i>
                <span class='d-none d-md-inline'>Confirmation</span>
              </a>
            </nav>
          </div>
        </section>
        <section className='section'>
          <div className='container pt-0 mt-n8'>
            <div className='row'>
              {switchOperator(step)}
              <OrderSummary cartItems={cartItems} values={values} />
            </div>
          </div>
        </section>
        <div class='position-relative'>
          <div class='shape-divider shape-divider-bottom shape-divider-fluid-x text-dark'>
            <svg viewBox='0 0 2880 48' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z'></path>
            </svg>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default CheckoutPage;
