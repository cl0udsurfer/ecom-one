import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div class='position-relative'>
        <div class='shape-divider shape-divider-bottom shape-divider-fluid-x text-dark'>
          <svg viewBox='0 0 2880 48' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z'></path>
          </svg>
        </div>
      </div>
      <footer className='site-footer section bg-dark'>
        <div className='container pb-5'>
          <div className='row'>
            <div className='col-md-4'>
              <h6 className='text-contrast'>All Products</h6>
              <nav className='nav flex-column'>
                <a className='nav-item py-1' href='#'>
                  Headphones
                </a>
                <a className='nav-item py-1' href='#'>
                  Portable Speakers
                </a>
                <a className='nav-item py-1' href='#'>
                  Audio Accessories
                </a>
                <a className='nav-item py-1' href='#'>
                  Earbuds
                </a>
                <a className='nav-item py-1' href='#'>
                  Speakers
                </a>
                <a className='nav-item py-1' href='#'>
                  Subwoofers
                </a>
              </nav>
            </div>
            <div className='col-md-4'>
              <h6 className='text-contrast'>Categories</h6>
              <nav className='nav flex-column'>
                <a className='nav-item py-1' href='#'>
                  Wireless & Bluetooth
                </a>
                <a className='nav-item py-1' href='#'>
                  Computer & Electronics
                </a>
                <a className='nav-item py-1' href='#'>
                  Speakers
                </a>
                <a className='nav-item py-1' href='#'>
                  Virtual Reality
                </a>
                <a className='nav-item py-1' href='#'>
                  Gaming & Consoles
                </a>
                <a className='nav-item py-1' href='#'>
                  TVs
                </a>
              </nav>
            </div>
            <div className='col-md-4'>
              <h6 className='text-contrast'>Information</h6>
              <nav className='nav flex-column'>
                <a className='nav-item py-1' href='#'>
                  About company
                </a>
                <a className='nav-item py-1' href='#'>
                  Brands
                </a>
                <a className='nav-item py-1' href='#'>
                  Meet the Team
                </a>
                <a className='nav-item py-1' href='#'>
                  Contact Info
                </a>
                <a className='nav-item py-1' href='#'>
                  FAQs
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className='bg-darker'>
          <div className='container pt-5 pb-2'>
            <div className='row'>
              <div className='col-md-2'>
                <div className='bg-dark p-3 icon-xl rounded-circle center-flex mx-auto'>
                  <img
                    src='assets/img/shop/icons/fic/072-sale.svg'
                    className='inline-it img-responsive fill-alternate'
                    alt=''
                  />
                </div>
                <h6 className='mt-3 mb-0 text-center text-light bold'>
                  Deals &amp; Promotions
                </h6>
              </div>
              <div className='col-md-2'>
                <div className='bg-dark p-3 icon-xl rounded-circle center-flex mx-auto'>
                  <img
                    src='assets/img/shop/icons/fic/026-delivery-truck-2.svg'
                    className='inline-it img-responsive fill-alternate'
                    alt=''
                  />
                </div>
                <h6 className='mt-3 mb-0 text-center text-light bold'>
                  Free Shipping
                </h6>
              </div>
              <div className='col-md-2'>
                <div className='bg-dark p-3 icon-xl rounded-circle center-flex mx-auto'>
                  <img
                    src='assets/img/shop/icons/fic/060-package-1.svg'
                    className='inline-it img-responsive fill-alternate'
                    alt=''
                  />
                </div>
                <h6 className='mt-3 mb-0 text-center text-light bold'>
                  Easy Return
                </h6>
              </div>
              <div className='col-md-2'>
                <div className='bg-dark p-3 icon-xl rounded-circle center-flex mx-auto'>
                  <img
                    src='assets/img/shop/icons/fic/056-box.svg'
                    className='inline-it img-responsive fill-alternate'
                    alt=''
                  />
                </div>
                <h6 className='mt-3 mb-0 text-center text-light bold'>
                  Order Tracking
                </h6>
              </div>
              <div className='col-md-2'>
                <div className='bg-dark p-3 icon-xl rounded-circle center-flex mx-auto'>
                  <img
                    src='assets/img/shop/icons/fic/076-security.svg'
                    className='inline-it img-responsive fill-alternate'
                    alt=''
                  />
                </div>
                <h6 className='mt-3 mb-0 text-center text-light bold'>
                  Secure Checkout
                </h6>
              </div>
              <div className='col-md-2'>
                <div className='bg-dark p-3 icon-xl rounded-circle center-flex mx-auto'>
                  <img
                    src='assets/img/shop/icons/fic/020-chat.svg'
                    className='inline-it img-responsive fill-alternate'
                    alt=''
                  />
                </div>
                <h6 className='mt-3 mb-0 text-center text-light bold'>
                  Customer Support
                </h6>
              </div>
            </div>
            <hr className='border-dark my-5' />
            <div className='row align-items-center'>
              <div className='col-md-4'>
                <nav className='nav flex-wrap'>
                  <a className='nav-item py-1 mr-3' href='#'>
                    Support
                  </a>
                  <a className='nav-item py-1 mr-3' href='#'>
                    Privacy
                  </a>
                  <a className='nav-item py-1 mr-3' href='#'>
                    Terms of use
                  </a>
                  <a className='nav-item py-1' href='#'>
                    Return Policy
                  </a>
                </nav>
              </div>
              <div className='col-md-4 text-center'>
                <a className='d-inline-block align-middle mr-3' href='#'>
                  <img
                    className='img-responsive logo'
                    src='assets/img/logo-light.png'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-4 d-flex'>
                <nav className='nav ml-md-auto'>
                  <a className='btn btn-sm btn-dark mr-2' href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a className='btn btn-sm btn-dark mr-2' href='#'>
                    <i className='fab fa-facebook'></i>
                  </a>
                  <a className='btn btn-sm btn-dark mr-2' href='#'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a className='btn btn-sm btn-dark mr-2' href='#'>
                    <i className='fab fa-pinterest'></i>
                  </a>
                  <a className='btn btn-sm btn-dark' href='#'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </nav>
              </div>
            </div>
            <div className='row align-items-center mt-4'>
              <div className='col-md-6'>
                <p className='mt-4 small mb-md-0 text-center text-md-left'>
                  © 2019
                  <a href='#' target='_blank'>
                    cl0udsurfer
                  </a>
                  . All Rights Reserved
                </p>
              </div>
              <div className='col-md-6'>
                <img
                  className='img-responsive ml-md-auto'
                  style={{ maxWidth: '136px' }}
                  src='assets/img/shop/payment-methods.png'
                  alt='Payment methods'
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
