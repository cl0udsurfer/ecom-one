import React, { useState, useEffect } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import { getProduct } from '../../api/admin';
import AddToCartButton from '../../components/core/AddToCartButton';
import ShowImage from '../../api/showImage';

const ProductPage = props => {
  const [product, setProduct] = useState({});

  const loadSingleProduct = productId => {
    getProduct(productId).then(data => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setProduct(data.data);
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, []);

  return (
    <LayoutMain>
      <main class='overflow-hidden'>
        <section class='page header bg-dark section'>
          <div class='container'>
            <div class='row gap-y align-items-center text-center text-md-left'>
              <div class='col-md-10'>
                <h1 class='regular text-contrast'>{product.name}</h1>
              </div>
              <div class='col-md-2'>${product.price}</div>
            </div>
          </div>
        </section>
        <section class='section'>
          <div class='container pt-0 mt-n8'>
            <div class='row'>
              <div class='col-lg-8 pt-8'>
                <div class='container bring-to-front py-0'>
                  <div class='shadow bg-contrast p-5 rounded'>
                    <div class='row gap-y align-items-top text-left'>
                      <div class='col-12 col-md-8 py-4 px-5'>
                        <ShowImage
                          className='img-responsive mx-auto'
                          product={product}
                        />
                      </div>
                    </div>
                    <div class='row gap-y align-items-top text-left'>
                      <div
                        class='
                        col-12 py-4 px-0'
                      >
                        <h4 class='mr-3'>Description</h4>

                        <p class='mt-4'>{product.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <aside class='col-lg-4 pt-4 pt-lg-0 mt-md-8'>
                <div class='card shadow border-0 rounded-lg'>
                  <div class='card-body'>
                    <h4 className='d-flex align-items-center mt-2 mb-4 text-success'>
                      <span className='mr-auto h6 mb-0'>Price</span>
                      <span>${product.price}</span>
                    </h4>
                    <br />
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </LayoutMain>
  );
};

export default ProductPage;
