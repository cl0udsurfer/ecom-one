import React, { useState, useEffect } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import CheckoutForm from '../../components/form/CheckoutForm';

const CheckoutPage = () => {
  return (
    <LayoutMain title='Home' description='Home'>
      <div>
        <h1>Checkout</h1>
        <CheckoutForm />
      </div>
    </LayoutMain>
  );
};

export default CheckoutPage;
