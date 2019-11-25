import React, { useState } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import SignupForm from '../../components/signup/SignupForm';

const Signup = () => {
  return (
    <LayoutMain title='Signup' description='Signup'>
      <SignupForm />
    </LayoutMain>
  );
};

export default Signup;
