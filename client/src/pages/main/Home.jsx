import React, { useState, useEffect } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import { getProducts, getCategories } from '../../api/admin';
import '../../assets/css/style.css';

import { Row, Col, Carousel } from 'antd';

import ProductCard from '../../components/product/ProductCard';
import CategoryCard from '../../components/category/CategoryCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

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

  const loadCategories = () => {
    getCategories().then(data => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data.data);
      }
    });
  };

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  return (
    <LayoutMain title='Home' description='Home'>
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <h2 style={{ margin: 50 }}>New Arrivals</h2>
      <Row>
        {products.map((product, i) => (
          <Col span={6}>
            <ProductCard key={i} product={product} />
          </Col>
        ))}
      </Row>
      <h2 style={{ margin: 50 }}>Categories</h2>
      {categories.map((categories, i) => (
        <CategoryCard key={i} categories={categories} />
      ))}
    </LayoutMain>
  );
};

export default Home;
