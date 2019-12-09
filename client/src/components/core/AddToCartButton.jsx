import React from 'react';

import { addItem } from '../../api/cart';

const AddToCartButton = ({ product }) => {
  const addToCart = () => {
    addItem(product);
  };

  return (
    <button
      onClick={addToCart}
      class='btn btn-primary btn-block mb-2'
      type='button'
    >
      <i data-feather='shopping-cart' class='mr-1' width='16'></i>Add to Cart
    </button>
  );
};

export default AddToCartButton;
