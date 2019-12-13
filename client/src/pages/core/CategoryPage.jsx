import React, { useState, useEffect } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import { getCategory, getProductsByCategory } from '../../api/admin';
import ProductCard from '../../components/core/ProductCard';

const CategoryPage = props => {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleCategory = categoryId => {
    getCategory(categoryId).then(data => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setCategory(data.data);
      }
    });
  };

  const loadProducts = categoryId => {
    getProductsByCategory(categoryId).then(data => {
      console.log(data.data);
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data.data);
      }
    });
  };

  useEffect(() => {
    const categoryId = props.match.params.categoryId;
    loadSingleCategory(categoryId);
    loadProducts(categoryId);
  }, []);

  return (
    <LayoutMain>
      <main class='overflow-hidden'>
        <section class='page header bg-dark section'>
          <div class='container'>
            <div class='row gap-y align-items-center text-center text-md-left'>
              <div class='col-md-10'>
                <h1 class='regular text-contrast'>{category.name}</h1>
              </div>
            </div>
          </div>
        </section>
        <section class='section'>
          <div class='container pt-0 mt-4'>
            <div class='row'>
              {products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </LayoutMain>
  );
};

export default CategoryPage;
