import React, { useState, useEffect, Fragment } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormPaymentDetails from './FormPaymentDetails';
import FormConfirm from './FormConfirm';

import { getCart, itemTotal } from '../../api/cart';
import { isAuthenticated } from '../../api/auth';
import {
  getBraintreeClientToken,
  processPayment,
  createOrder
} from '../../api/user';

const CheckoutForm = () => {
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

  const [values, setValues] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    state: '',
    cartItems: [],
    instance: {},
    total: '',
    error: '',
    loading: false,
    success: false,
    braintreeClientToken: ''
  });

  const {
    step,
    firstName,
    lastName,
    address,
    postalCode,
    city,
    state,
    cartItems,
    total,
    error,
    success,
    loading,
    braintreeClientToken
  } = values;

  const getTotal = () => {
    return cartItems.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  useEffect(() => {
    getToken(userId, token);
    let total = getTotal();
    let cart = getCart();
    setValues({ ...values, cartItems: cart, total: total });
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
        <Fragment>
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        </Fragment>
      );

    case 2:
      return (
        <FormPaymentDetails
          values={values}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return <FormConfirm prevStep={prevStep} values={values} />;
    case 4:
      return <h1>Success</h1>;
  }
};

export default CheckoutForm;
