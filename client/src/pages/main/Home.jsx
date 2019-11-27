import React, { useState, useEffect } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import { getProducts } from '../../api/admin';

import ProductCard from '../../components/product/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadProducts = () => {
    getProducts().then(data => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <LayoutMain title='Home' description='Home'>
      <p>Home</p>

      <ProductCard />
    </LayoutMain>
  );
};

export default Home;
