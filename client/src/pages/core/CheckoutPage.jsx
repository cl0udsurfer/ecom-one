import React, { useState, useEffect, Fragment } from 'react';
import { isAuthenticated } from '../../api/auth';
import {
  getBraintreeClientToken,
  processPayment,
  createOrder
} from '../../api/user';
import { getCart } from '../../api/cart';

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
    console.log(cart);
    let sum = cart
      .map(o => o.price)
      .reduce((a, c) => {
        return a + c;
      });
    console.log(sum);
    let tax = sum * 0.19;
    let total = (Math.round((sum + tax) * 100) / 100).toFixed(2);
    setPrices({ ...prices, subtotal: sum, taxes: tax, total: total });
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
    instance: {},
    error: '',
    loading: false,
    success: false,
    braintreeClientToken: ''
  });
  const [cartItems, setCartItems] = useState([]);
  const [prices, setPrices] = useState({
    subtotal: 0,
    taxes: 0,
    total: 0
  });
  const [run, setRun] = useState(false);

  const {
    step,
    firstName,
    lastName,
    address,
    postalCode,
    city,
    state,
    error,
    success,
    loading,
    braintreeClientToken
  } = values;

  const { subtotal, taxes, total } = prices;

  useEffect(() => {
    // Fix SubTotal and Taxes Calculation -> setValues
    getToken(userId, token);
    getCartItems();
  }, []);

  // Proceed to Next Step
  const nextStep = () => {
    setValues({ ...values, step: step + 1 });
  };

  // Go back to previous Step
  const prevStep = () => {
    setValues({ ...values, step: step - 1 });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const buy = () => {
    let nonce;
    let getNonce = values.instance
      .requestPaymentMethod()
      .then(data => {
        nonce = data.nonce;
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: prices.total
        };

        processPayment(userId, token, paymentData)
          .then(response => {
            console.log(response);

            const createOrderData = {
              firstName: values.firstName,
              lastName: values.lastName,
              address: values.address,
              postalCode: values.postalCode,
              city: values.city,
              state: values.state,
              orderedProducts: cartItems,
              transactionId: response.transaction.id,
              amount: response.transaction.amount
            };

            createOrder(userId, token, createOrderData)
              .then(response => {
                console.log('payment success', response);

                setValues({ loading: false, success: true });
              })
              .catch(error => {
                console.log(error, '1');
                setValues({ loading: false });
              });
          })
          .catch(error => {
            console.log(error, '2');
            setValues({ loading: false });
          });
      })
      .catch(error => {
        console.log(error, '3');
        setValues({ ...values, error: error.message });
      });
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
              <OrderSummary
                cartItems={cartItems}
                values={values}
                prices={prices}
                buy={buy}
                run={run}
              />
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
