import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LayoutMain from '../../components/core/LayoutMain';
import CategoryList from '../../components/admin/CategoryList';

import { isAuthenticated } from '../../api/auth';
import { addCategory, getCategories } from '../../api/admin';

const ManageCategories = () => {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = e => {
    setError('');
    setName(e.target.value);
  };

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

  const clickSubmit = e => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    // make request to api to create category
    addCategory(user._id, token, { name }).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setName('');
        setError('');
        setSuccess(true);
        window.location.reload();
      }
    });
  };

  const showSuccess = () => {
    return (
      <div
        style={{ display: success ? '' : 'none' }}
        class='alert alert-success'
        role='alert'
      >
        Category added successfully
      </div>
    );
  };

  const showError = () => {
    return (
      <div
        style={{ display: error ? '' : 'none' }}
        class='alert alert-danger'
        role='alert'
      >
        {error}
      </div>
    );
  };

  return (
    <LayoutMain>
      <main class='overflow-hidden'>
        <section class='page header bg-dark section'>
          <div class='container'>
            <div class='row gap-y align-items-center text-center text-md-left'>
              <div class='col-md-10'>
                <h1 class='regular text-contrast'>Admin Dashboard</h1>
              </div>
            </div>
          </div>
        </section>
        <section class='section'>
          <div class='container pt-0 mt-5'>
            <section class='section bg-light'>
              <div class='container bring-to-front py-0'>
                <div class='shadow bg-contrast p-5 rounded'>
                  <div class='row gap-y text-lg-left'>
                    <div class='col-12 px-5 b-md-r'>
                      {showError()}
                      {showSuccess()}
                      <h4 class='mr-3 mb-3'>Add Category</h4>
                      <form onSubmit={clickSubmit} class='form form-contact'>
                        <div class='form-group'>
                          <label for='contact_email' class='bold mb-0'>
                            Name
                          </label>
                          <input
                            name='name'
                            onChange={handleChange}
                            placeholder='Category Name'
                            value={name}
                            class='form-control bg-contrast'
                            required
                          />
                        </div>
                        <div class='form-group'>
                          <button
                            id='contact-submit'
                            type='submit'
                            class='btn btn-primary btn-rounded mb-2'
                          >
                            Add Category
                          </button>
                          <br />
                          Or <Link to='/admin/dashboard'>Go back</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class='section'>
          <div class='container pt-0'>
            <section class='section bg-light'>
              <div class='container bring-to-front py-0'>
                <div class='shadow bg-contrast p-5 rounded'>
                  <div class='row gap-y text-lg-left'>
                    <div class='col-12 px-5 b-md-r'>
                      <h4 class='mr-3 mb-3'>Categories</h4>
                      <button
                        onClick={() => {
                          window.location.reload();
                        }}
                        class='btn btn-outline-primary btn-block mt-4'
                        type='button'
                      >
                        <i class='fas fa-redo mr-2'></i>Update List
                      </button>
                      {categories.map((category, i) => (
                        <CategoryList key={i} category={category} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </LayoutMain>
  );
};

export default ManageCategories;
