import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { addItem } from '../../api/cart';
import { isAuthenticated } from '../../api/auth';

const AddToCartButton = ({ product }) => {
  const addToCart = () => {
    console.log('added');
    addItem(product);
  };

  return (
    <Fragment>
      {isAuthenticated() && <button onClick={addToCart}>Add to Cart</button>}
      {!isAuthenticated() && <Link to='/signin'>Signin to Add to Cart</Link>}
    </Fragment>
  );
};

export default AddToCartButton;
