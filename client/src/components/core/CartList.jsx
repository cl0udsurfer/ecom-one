import React from 'react';

import { removeItem } from '../../api/cart';
import ShowImage from '../../api/showImage';

const CartList = ({ items }) => {
  return (
    <div class='row border-bottom py-4'>
      <div class='col-md-8 col-lg-9 col-xl-10'>
        <div class='media d-block text-center d-sm-flex text-sm-left'>
          <a class='mr-sm-4' href='javascript:;'>
            <ShowImage
              style={{ maxWidth: '200px' }}
              className='img-responsive mx-auto'
              product={items}
            />
          </a>
          <div class='media-body'>
            <a class='product-category text-muted font-xs' href='javascript:;'>
              Category
            </a>
            <h6 class='product-title bold'>
              <a href='javascript:;' class='text-darker'>
                {items.name}
              </a>
            </h6>
            <p class='my-0 text-muted small'>
              {items.description.substring(0, 50)}
            </p>
            <div class='text-primary light lead mt-3'>
              <span>${items.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-4 col-lg-3 col-xl-2'>
        <form class='form text-center text-sm-left'>
          <button
            onClick={() => {
              removeItem(items._id);
              window.location.reload();
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

export default CartList;
