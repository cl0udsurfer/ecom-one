import React, { useState, useEffect } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import { getCategory, getProductsByCategory } from '../../api/admin';
import ProductCard from '../../components/product/ProductCard';

import { Row, Col } from 'antd';

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
    <LayoutMain title='Home' description='Home'>
      <h1>{category.name}</h1>
      <Row>
        {products.map((product, i) => (
          <Col span={6}>
            <ProductCard key={i} product={product} />
          </Col>
        ))}
      </Row>
    </LayoutMain>
  );
};

export default CategoryPage;
