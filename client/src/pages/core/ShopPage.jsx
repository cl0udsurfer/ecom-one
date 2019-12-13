import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import ProductCard from '../../components/core/ProductCard';
import { getProducts } from '../../api/admin';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const loadProducts = () => {
    getProducts().then(data => {
      console.log(data.data);
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data.data);
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <LayoutMain>
      <main class='overflow-hidden'>
        <section class='page header bg-dark section'>
          <div class='container'>
            <div class='row gap-y align-items-center text-center text-md-left'>
              <div class='col-md-10'>
                <h1 class='regular text-contrast'>Shop</h1>
              </div>
            </div>
          </div>
        </section>
        <section class='trending-now'>
          <div class='container'>
            <div class='section-heading'>
              <span class='text-primary bold'>Discover</span>
              <h3>What Fits to You</h3>
            </div>
            <div class='row gap-y'>
              {products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
            <div class='text-center pt-3 mt-5'>
              <Link class='btn btn-outline-primary' to='/shop'>
                More products <i class='fas fa-chevron-right ml-1'></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </LayoutMain>
  );
};

export default ShopPage;
