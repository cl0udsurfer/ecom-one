import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LayoutMain from '../../components/core/LayoutMain';
import ProductList from '../../components/admin/ProductList';

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
        className='alert alert-success'
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
        className='alert alert-danger'
        role='alert'
      >
        {error}
      </div>
    );
  };

  return (
    <LayoutMain>
      <main className='overflow-hidden'>
        <section className='page header bg-dark section'>
          <div className='container'>
            <div className='row gap-y align-items-center text-center text-md-left'>
              <div className='col-md-10'>
                <h1 className='regular text-contrast'>Admin Dashboard</h1>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container pt-0 mt-5'>
            <section className='section bg-light'>
              <div className='container bring-to-front py-0'>
                <div className='shadow bg-contrast p-5 rounded'>
                  <div className='row gap-y text-lg-left'>
                    <div className='col-12 px-5 b-md-r'>
                      <h4 className='mr-3 mb-3'>Add Product</h4>
                      <form
                        onSubmit={clickSubmit}
                        className='form form-contact'
                      >
                        <div className='form-group'>
                          <label for='contact_email' className='bold mb-0'>
                            Upload Photo
                          </label>
                          <input
                            type='file'
                            name='photo'
                            className='form-control bg-contrast'
                            onChange={handleChange('photo')}
                            accept='image/*'
                          />
                        </div>
                        <div className='form-group'>
                          <label for='contact_email' className='bold mb-0'>
                            Name
                          </label>
                          <input
                            name='name'
                            onChange={handleChange('name')}
                            placeholder='Name'
                            value={name}
                            className='form-control bg-contrast'
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label for='contact_email' className='bold'>
                            Description
                          </label>
                          <textarea
                            name='description'
                            onChange={handleChange('description')}
                            placeholder='Description'
                            value={description}
                            id='contact_message'
                            className='form-control bg-contrast'
                            rows='6'
                            required
                          ></textarea>
                        </div>
                        <div className='form-group'>
                          <label for='contact_email' className='bold mb-1'>
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
                        <div className='form-group'>
                          <label for='contact_email' className='bold mb-0'>
                            Price
                          </label>
                          <input
                            type='number'
                            name='price'
                            onChange={handleChange('price')}
                            placeholder='Price'
                            value={price}
                            className='form-control bg-contrast'
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label for='contact_email' className='bold mb-0'>
                            Quantity
                          </label>
                          <input
                            type='number'
                            name='quantity'
                            onChange={handleChange('quantity')}
                            placeholder='Quantity'
                            value={quantity}
                            className='form-control bg-contrast'
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <button
                            id='contact-submit'
                            type='submit'
                            className='btn btn-primary btn-rounded mb-2'
                          >
                            Add Product
                          </button>
                          <br />
                          Or <Link to='/admin/dashboard'>Go back</Link>
                        </div>
                        {showError()}
                        {showLoading()}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className='section'>
          <div className='container pt-0'>
            <section className='section bg-light'>
              <div className='container bring-to-front py-0'>
                <div className='shadow bg-contrast p-5 rounded'>
                  <div className='row gap-y text-lg-left'>
                    <div className='col-12 px-5 b-md-r'>
                      <h4 className='mr-3 mb-3'>Products</h4>
                      <button
                        onClick={() => {
                          window.location.reload();
                        }}
                        class='btn btn-outline-primary btn-block mt-4'
                        type='button'
                      >
                        <i class='fas fa-redo mr-2'></i>Update List
                      </button>
                      {products.map((product, i) => (
                        <ProductList key={i} product={product} />
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

export default ManageProducts;
