import React, { Fragment } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const LayoutMain = ({
  title = 'Title',
  description = 'Description',
  children
}) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default LayoutMain;
