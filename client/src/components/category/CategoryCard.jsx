import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'antd';

const CategoryCard = ({ categories }) => {
  const gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  return (
    <Link to={`/category/${categories._id}`}>
      <Card.Grid style={gridStyle}>{categories.name}</Card.Grid>
    </Link>
  );
};

export default CategoryCard;
