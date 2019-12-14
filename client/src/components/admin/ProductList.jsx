import React, { useState } from 'react';

import { isAuthenticated } from '../../api/auth';
import { removeProduct } from '../../api/admin';

const ProductList = ({ product }) => {
  const [error, setError] = useState('');

  const { token } = isAuthenticated();

  return (
    <div class='row border-bottom py-4'>
      <div class='col-md-8 col-lg-9 col-xl-10'>
        <div class='media d-block text-center d-sm-flex text-sm-left'>
          <a class='mr-sm-4' href='javascript:;'>
            <img
              src='assets/img/shop/products/computerconnection.png'
              class='img-responsive mx-auto'
              style={{ maxWidth: '120px' }}
              alt=''
            />
          </a>
          <div class='media-body'>
            <h6 class='product-title bold'>
              <a href='javascript:;' class='text-darker'>
                {product.name}
              </a>
            </h6>
            <p class='my-0 text-muted small'>
              {product.description.substring(0, 50)}
            </p>
            <div class='text-primary light lead mt-3'>
              <span>${product.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-4 col-lg-3 col-xl-2'>
        <form class='form text-center text-sm-left'>
          <button
            onClick={() => {
              removeProduct(token, product._id).then(data => {
                if (data.error) {
                  setError(data.error);
                } else {
                  setError('');
                  window.location.reload();
                }
              });
            }}
            class='btn btn-link px-0 text-danger'
            type='button'
          >
            <i class='fas fa-times mr-2'></i> Remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductList;
