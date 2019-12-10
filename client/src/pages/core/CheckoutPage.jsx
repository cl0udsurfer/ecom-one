import React, { useState, useEffect } from 'react';
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

    instance: {},
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
    total,
    error,
    success,
    loading,
    braintreeClientToken
  } = values;

  useEffect(() => {
    getCartItems();
    getToken(userId, token);
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

  switch (step) {
    case 1:
      return (
        <LayoutCheckout>
          <CheckoutDetails
            handleChange={handleChange}
            values={values}
            nextStep={nextStep}
            cartItems={cartItems}
          />
        </LayoutCheckout>
      );
    case 2:
      return (
        <LayoutCheckout>
          <CheckoutPayment
            prevStep={prevStep}
            nextStep={nextStep}
            cartItems={cartItems}
          />
        </LayoutCheckout>
      );
    case 3:
      return (
        <LayoutCheckout>
          <CheckoutConfirm values={values} cartItems={cartItems} />
        </LayoutCheckout>
      );
  }
};

export default CheckoutPage;
