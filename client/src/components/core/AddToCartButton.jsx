import React, { useState, Fragment } from 'react';

import { addItem } from '../../api/cart';

const AddToCartButton = ({ product }) => {
  const [success, setSuccess] = useState(false);

  const addToCart = () => {
    addItem(product);
    setSuccess(true);
  };

  const showDefault = () => {
    return (
      <button
        style={{ display: !success ? '' : 'none' }}
        onClick={addToCart}
        class='btn btn-primary btn-block mb-2'
        type='button'
      >
        <i class='fas fa-cart-plus'></i> Add to Cart
      </button>
    );
  };

  const showSuccess = () => {
    return (
      <button
        style={{ display: success ? '' : 'none' }}
        class='btn btn-success btn-block mb-2'
      >
        <i class='far fa-check-circle'></i> Added to Cart
      </button>
    );
  };

  return (
    <Fragment>
      {showDefault()}
      {showSuccess()}
    </Fragment>
  );
};

export default AddToCartButton;
