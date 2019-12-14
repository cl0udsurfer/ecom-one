import React from 'react';
import { Link } from 'react-router-dom';

import { logout, isAuthenticated } from '../../api/auth';

import '../../assets/css/navbar.css';

const Navbar = ({ categories }) => {
  return (
    <header className='header-global'>
      <nav
        id='navbar-main'
        className='navbar navbar-main navbar-expand-lg navbar-light bg-light'
      >
        <div className='container'>
          <a className='navbar-brand mr-lg-5' href='/'>
            <img
              src='/assets/img/logo.png'
              style={{
                width: '200px',
                height: 'auto'
              }}
            />
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
                  <Link to='/'>
                    <img
                      src='assets/img/logo.png'
                      style={{
                        width: '200px',
                        height: 'auto'
                      }}
                    />
                  </Link>
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
                <Link to='/' className='nav-link' data-toggle='' role='button'>
                  <span className='nav-link-inner--text'>Home</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/shop'
                  className='nav-link'
                  data-toggle=''
                  role='button'
                >
                  <span className='nav-link-inner--text'>Shop</span>
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link' data-toggle='dropdown' role='button'>
                  <i class='fas fa-chevron-circle-down mr-0'></i>
                  <span className='nav-link-inner--text'>Categories</span>
                </a>
                <div className='dropdown-menu dropdown-menu-xl'>
                  <div className='dropdown-menu-inner'>
                    {categories.map((c, i) => (
                      <Link
                        to={`/category/${c._id}`}
                        className='media d-flex align-items-center'
                      >
                        <div className='media-body ml-3'>
                          <h6 className='heading text-primary mb-md-1'>
                            {c.name}
                          </h6>
                        </div>
                      </Link>
                    ))}
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
                  <span className='nav-link-inner--text'>
                    <i class='fas fa-shopping-cart m-1'></i>Cart
                  </span>
                </Link>
              </li>

              <li className='nav-item dropdown'>
                <a
                  href='#'
                  className='btn btn-default dropdown-toggle '
                  data-toggle='dropdown'
                  id='navbarDropdownMenuLink2'
                >
                  <i class='fas fa-user-cog'> </i>
                </a>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink2'
                >
                  {!isAuthenticated() && (
                    <li class='st-nav-section st-nav-secondary nav-item'>
                      <a class='btn btn-rounded btn-outline' href='/login'>
                        <i class='fas fa-sign-in-alt d-none d-md-inline mr-md-0 mr-lg-2'></i>
                        <span class='d-md-none d-lg-inline'>Login</span>
                      </a>
                    </li>
                  )}
                  {!isAuthenticated() && (
                    <li class='st-nav-section st-nav-secondary nav-item'>
                      <a class='btn btn-rounded btn-solid' href='/register'>
                        <i class='fas fa-user-plus d-none d-md-inline mr-md-0'></i>
                        <span class='d-md-none d-lg-inline'> Register</span>
                      </a>
                    </li>
                  )}
                  {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li class='st-nav-section st-nav-secondary nav-item'>
                      <Link
                        class='btn btn-rounded btn-outline'
                        to='/user/dashboard'
                      >
                        <i class='fas fa-columns'> </i>
                        <span class='d-md-none d-lg-inline'> Dashboard</span>
                      </Link>
                    </li>
                  )}
                  {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li class='st-nav-section st-nav-secondary nav-item'>
                      <Link
                        class='btn btn-rounded btn-outline'
                        to='/admin/dashboard'
                      >
                        <i class='fas fa-columns'> </i>
                        <span class='d-md-none d-lg-inline'> Dashboard</span>
                      </Link>
                    </li>
                  )}
                  {isAuthenticated() && (
                    <li class='st-nav-section st-nav-secondary nav-item'>
                      <Link
                        onClick={() => logout()}
                        class='btn btn-rounded btn-outline'
                        to='/'
                      >
                        <i class='fas fa-sign-out-alt'> </i>
                        <span class='d-md-none d-lg-inline'> Logout</span>
                      </Link>
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
