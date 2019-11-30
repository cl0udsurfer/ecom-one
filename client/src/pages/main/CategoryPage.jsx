import React, { useState, useEffect } from 'react';
import { getCategory } from '../../api/admin';

const CategoryPage = props => {
  const [category, setCategory] = useState({});

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

  useEffect(() => {
    const categoryId = props.match.params.categoryId;
    loadSingleCategory(categoryId);
  }, []);

  return (
    <div>
      <h1>Category Page</h1>
      <h2>Category: {category.name}</h2>
    </div>
  );
};

export default CategoryPage;
