import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { logout, isAuthenticated } from '../../api/auth';
import { getCategories } from '../../api/admin';

import '../../assets/css/navbar.css';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  // Load all Categories
  const loadCategories = () => {
    getCategories().then(data => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data.data);
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

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
                  {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li>
                      <Link className='dropdown-item' to='/user/dashboard'>
                        Dashboard
                      </Link>
                    </li>
                  )}
                  {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li>
                      <Link className='dropdown-item' to='/admin/dashboard'>
                        Dashboard
                      </Link>
                    </li>
                  )}
                  {isAuthenticated() && (
                    <li>
                      <Link
                        onClick={() => logout()}
                        className='dropdown-item'
                        to='/'
                      >
                        Logout
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
