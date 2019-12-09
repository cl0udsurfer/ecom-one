import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LayoutMain from '../../components/core/LayoutMain';

import { isAuthenticated } from '../../api/auth';
import { addProduct, getCategories, getProducts } from '../../api/admin';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    quantity: '',
    photo: '',
    loading: false,
    error: '',
    formData: ''
  });

  const { user, token } = isAuthenticated();

  const {
    name,
    description,
    price,
    categories,
    category,
    quantity,
    loading,
    error,
    formData
  } = values;

  // load categories and set form data
  const init = () => {
    getCategories().then(data => {
      console.log(data.data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data.data,
          formData: new FormData()
        });
      }
    });
    getProducts().then(data => {
      console.log(data.data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setProducts(data.data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });

    addProduct(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          createdProduct: data.name
        });
      }
    });
  };

  const showLoading = () => {
    return (
      <div
        style={{ display: loading ? '' : 'none' }}
        class='alert alert-success'
        role='alert'
      >
        Product added successfully
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
                      {showLoading()}
                      <h4 class='mr-3 mb-3'>Add Product</h4>
                      <form onSubmit={clickSubmit} class='form form-contact'>
                        <div class='form-group'>
                          <label for='contact_email' class='bold mb-0'>
                            Upload Photo
                          </label>
                          <input
                            type='file'
                            name='photo'
                            class='form-control bg-contrast'
                            onChange={handleChange('photo')}
                            accept='image/*'
                          />
                        </div>
                        <div class='form-group'>
                          <label for='contact_email' class='bold mb-0'>
                            Name
                          </label>
                          <input
                            name='name'
                            onChange={handleChange('name')}
                            placeholder='Name'
                            value={name}
                            class='form-control bg-contrast'
                            required
                          />
                        </div>
                        <div class='form-group'>
                          <label for='contact_email' class='bold'>
                            Description
                          </label>
                          <textarea
                            name='description'
                            onChange={handleChange('description')}
                            placeholder='Description'
                            value={description}
                            id='contact_message'
                            class='form-control bg-contrast'
                            rows='6'
                            required
                          ></textarea>
                        </div>
                        <div class='form-group'>
                          <label for='contact_email' class='bold mb-0'>
                            Select Category
                          </label>
                          <br />
                          <select
                            name='category'
                            onChange={handleChange('category')}
                          >
                            <option name='select'>Please Select</option>
                            {categories &&
                              categories.map((c, i) => (
                                <option key={i} value={c.id}>
                                  {c.name}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div class='form-group'>
                          <label for='contact_email' class='bold mb-0'>
                            Price
                          </label>
                          <input
                            type='number'
                            name='price'
                            onChange={handleChange('price')}
                            placeholder='Price'
                            value={price}
                            class='form-control bg-contrast'
                            required
                          />
                        </div>
                        <div class='form-group'>
                          <label for='contact_email' class='bold mb-0'>
                            Quantity
                          </label>
                          <input
                            type='number'
                            name='quantity'
                            onChange={handleChange('quantity')}
                            placeholder='Quantity'
                            value={quantity}
                            class='form-control bg-contrast'
                            required
                          />
                        </div>
                        <div class='form-group'>
                          <button
                            id='contact-submit'
                            type='submit'
                            class='btn btn-primary btn-rounded'
                          >
                            Add Product
                          </button>
                        </div>
                      </form>
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

export default ManageProducts;
