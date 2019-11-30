import React, { useState, useEffect } from 'react';
import LayoutMain from '../../components/core/LayoutMain';
import { getProducts } from '../../api/admin';

import { Row, Col } from 'antd';

import ProductCard from '../../components/product/ProductCard';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <LayoutMain title='Shop' description='Shop'>
      <p>Shop</p>
      <p>SEARCH BAR TO DO!</p>
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

export default ShopPage;
