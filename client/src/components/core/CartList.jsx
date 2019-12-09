import React from 'react';

import { removeItem } from '../../api/cart';

const CartList = ({ item }) => {
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
            <a class='product-category text-muted font-xs' href='javascript:;'>
              {item.category.name}
            </a>
            <h6 class='product-title bold'>
              <a href='javascript:;' class='text-darker'>
                {item.name}
              </a>
            </h6>
            <p class='my-0 text-muted small'>{item.description}</p>
            <div class='text-primary light lead mt-3'>
              <span>${item.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-4 col-lg-3 col-xl-2'>
        <form class='form text-center text-sm-left'>
          <div class='form-group mb-0'>
            <label class='control-label font-sm text-dark' for='q1'>
              Quantity
            </label>
            <select class='form-control' id='q1'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <button
            onClick={() => {
              removeItem(item._id);
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
