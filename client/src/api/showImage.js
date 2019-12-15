import React from 'react';
import { API } from '../config/config';

const ShowImage = ({ product, style, className }) => (
  <div>
    <img
      src={`${API}/photo/${product._id}`}
      alt={product.name}
      style={style}
      className={className}
    />
  </div>
);

export default ShowImage;
