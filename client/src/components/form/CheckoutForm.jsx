import React, { useState } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormPaymentDetails from './FormPaymentDetails';
import FormConfirm from './FormConfirm';

const CheckoutForm = () => {
  const [values, setValues] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    state: ''
  });

  const {
    step,
    firstName,
    lastName,
    address,
    postalCode,
    city,
    state
  } = values;

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
