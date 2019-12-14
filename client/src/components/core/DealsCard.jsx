import React from 'react';
import { Link } from 'react-router-dom';

const DealsCard = ({ product }) => {
  return (
    <div className='col-6 col-sm-3 d-flex flex-column pl-0 pr-2'>
      <Link to={`/product/${product._id}`} className='shadow-box p-2'>
        <img
          src='assets/img/shop/products/earphones.jpg'
          className='img-responsive rounded'
          alt=''
        />
        <p className='mb-0 d-flex flex-wrap align-items-center'>
          $
          <span className='price text-darker bold ml-1 mr-auto'>
            {product.price}
          </span>
          <span className='badge badge-danger'>25% Off</span>
        </p>
      </Link>
    </div>
  );
};

export default DealsCard;
