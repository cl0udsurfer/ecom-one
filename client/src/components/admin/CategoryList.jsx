import React, { useState } from 'react';

import { isAuthenticated } from '../../api/auth';
import { removeCategory } from '../../api/admin';

const CategoryList = ({ category }) => {
  const [error, setError] = useState('');

  const { token } = isAuthenticated();

  return (
    <div class='row border-bottom py-4'>
      <div class='col-md-8 col-lg-9 col-xl-10'>
        <div class='media d-block text-center d-sm-flex text-sm-left'>
          <div class='media-body'>
            <h6 class='product-title bold'>
              <a href='javascript:;' class='text-darker'>
                {category.name}
              </a>
            </h6>
          </div>
        </div>
      </div>
      <div class='col-md-4 col-lg-3 col-xl-2'>
        <form class='form text-center text-sm-left'>
          <button
            onClick={() => {
              removeCategory(token, category._id).then(data => {
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

export default CategoryList;
