import React from 'react';
import { Link } from 'react-router-dom';

import { logout, isAuthenticated } from '../../api/auth';

import '../../assets/css/style.css';

const Navbar = () => {
  return (
    <header className='header-global'>
      <nav
        id='navbar-main'
        className='navbar navbar-main navbar-expand-lg navbar-light headroom'
      >
        <div className='container'>
          <a className='navbar-brand mr-lg-5' href='/'>
            <img src='/assets/img/logunion/logunion.png' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbar_global'
            aria-controls='navbar_global'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='navbar-collapse collapse' id='navbar_global'>
            <div className='navbar-collapse-header'>
              <div className='row'>
                <div className='col-6 collapse-brand'>
                  <a href='/'>
                    <img src='/assets/img/logunion/logunion.png' />
                  </a>
                </div>
                <div className='col-6 collapse-close'>
                  <button
                    type='button'
                    className='navbar-toggler'
                    data-toggle='collapse'
                    data-target='#navbar_global'
                    aria-controls='navbar_global'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>

            <ul className='navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto'>
              <li className='nav-item'>
                <a href='/' className='nav-link' data-toggle='' role='button'>
                  <span className='nav-link-inner--text'>Home</span>
                </a>
              </li>
              <li className='nav-item'>
                <a href='/' className='nav-link' data-toggle='' role='button'>
                  <span className='nav-link-inner--text'>Shop</span>
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  href='/leistungen'
                  className='nav-link'
                  data-toggle='dropdown'
                  role='button'
                >
                  <i className='ni ni-ui-04 d-lg-none'></i>
                  <span className='nav-link-inner--text'>Categories</span>
                </a>
                <div className='dropdown-menu dropdown-menu-xl'>
                  <div className='dropdown-menu-inner'>
                    <a
                      href='/leistungen/vertrieb-und-consulting'
                      className='media d-flex align-items-center'
                    >
                      <div className='media-body ml-3'>
                        <h6 className='heading text-primary mb-md-1'>
                          Category 1
                        </h6>
                      </div>
                    </a>
                    <a
                      href='/leistungen/planung-und-simulation'
                      className='media d-flex align-items-center'
                    >
                      <div className='media-body ml-3'>
                        <h6 className='heading text-primary mb-md-1'>
                          Category 2
                        </h6>
                      </div>
                    </a>
                    <a
                      href='/leistungen/projektmanagement-und-realisierung'
                      className='media d-flex align-items-center'
                    >
                      <div className='media-body ml-3'>
                        <h6 className='heading text-primary mb-md-1'>
                          Category 3
                        </h6>
                      </div>
                    </a>
                  </div>
                </div>
              </li>

              <li className='nav-item'>
                <Link
                  to='/cart'
                  className='nav-link'
                  data-toggle=''
                  role='button'
                >
                  <span className='nav-link-inner--text'>Cart</span>
                </Link>
              </li>

              <li className='nav-item dropdown'>
                <a
                  href='#'
                  className='btn btn-default dropdown-toggle '
                  data-toggle='dropdown'
                  id='navbarDropdownMenuLink2'
                >
                  <i className='ni ni-world-2'></i>
                </a>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink2'
                >
                  {!isAuthenticated() && (
                    <li>
                      <a className='dropdown-item' href='/login'>
                        Login
                      </a>
                    </li>
                  )}
                  {!isAuthenticated() && (
                    <li>
                      <a className='dropdown-item' href='/register'>
                        Register
                      </a>
                    </li>
                  )}
                  {isAuthenticated() && (
                    <li>
                      <a className='dropdown-item' href='/'>
                        Dashboard
                      </a>
                    </li>
                  )}
                  {isAuthenticated() && (
                    <li>
                      <a
                        onClick={() => logout()}
                        className='dropdown-item'
                        href='/'
                      >
                        Logout
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
