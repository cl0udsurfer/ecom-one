import React, { Fragment, useState, useEffect } from 'react';

const LayoutCheckout = ({
  title = 'Title',
  description = 'Description',
  children
}) => {
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
        {children}
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

export default LayoutCheckout;
