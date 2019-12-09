import React, { Fragment, useState, useEffect } from 'react';
import { getCategories } from '../../api/admin';

import Navbar from './Navbar';
import Footer from './Footer';

const LayoutMain = ({
  title = 'Title',
  description = 'Description',
  children
}) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  // Load all Categories
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
  }, []);

  return (
    <Fragment>
      <Navbar categories={categories} />
      {children}
      <Footer categories={categories} />
    </Fragment>
  );
};

export default LayoutMain;
