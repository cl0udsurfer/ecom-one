import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from '../../api/showImage';

import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }) => {
  return (
    <div class='col-sm-6 col-md-4 col-lg-3 shadow-hover'>
      <div class='card product-card border-0'>
        <Link
          class='card-img-top d-block overflow-hidden'
          to={`/product/${product._id}`}
        >
          <ShowImage
            style={{ height: '200px' }}
            className='img-responsive mx-auto'
            product={product}
          />
        </Link>
        <div class='card-body'>
          <a class='product-category text-muted font-xs' href='javascript:;'>
            {product.category.name}
          </a>
          <h3 class='product-title font-sm'>
            <a href='javascript:;' class='text-darker'>
              {product.name}
            </a>
          </h3>
          <div class='center-flex justify-content-between flex-wrap'>
            <div class='product-price d-flex align-items-end'>
              <div class='text-primary light lead'>
                <span>${product.price}</span>
              </div>
            </div>
          </div>
        </div>
        <div class='card-body card-body-hidden'>
          <AddToCartButton product={product} />
          <div class='text-center'>
            <Link
              to={`/product/${product._id}`}
              class='font-ms small text-muted'
            >
              <i data-feather='eye' class='mr-1' width='14'></i>View Product
            </Link>
          </div>
        </div>
      </div>
      <hr class='d-sm-none' />
    </div>
  );
};

export default ProductCard;
