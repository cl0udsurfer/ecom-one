import React, { useState } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import SigninForm from '../../components/signin/SigninForm';

const Signin = () => {
  return (
    <LayoutMain title='Signin' description='Signin'>
      <SigninForm />
    </LayoutMain>
  );
};

export default Signin;
