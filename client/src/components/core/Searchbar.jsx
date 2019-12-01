import React, { useState, useEffect } from 'react';

import { getCategories } from '../../api/admin';

const Searchbar = () => {
  const [data, setData] = useState({
    categories: [],
    category: '',
    search: '',
    results: [],
    searched: false
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data.data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <h1>Search Bar</h1>
    </div>
  );
};

export default Searchbar;
