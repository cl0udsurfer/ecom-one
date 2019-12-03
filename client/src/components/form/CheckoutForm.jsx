import React, { useState, useEffect } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormPaymentDetails from './FormPaymentDetails';
import FormConfirm from './FormConfirm';

import { getCart, itemTotal } from '../../api/cart';

const CheckoutForm = () => {
  const [values, setValues] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    state: '',
    cartItems: [],
    total: ''
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
    total
  } = values;

  const getTotal = () => {
    return cartItems.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  useEffect(() => {
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
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );

    case 2:
      return <FormPaymentDetails nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <FormConfirm prevStep={prevStep} values={values} />;
    case 4:
      return <h1>Success</h1>;
  }
};

export default CheckoutForm;
