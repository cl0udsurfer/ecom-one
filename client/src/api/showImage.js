import React from 'react';
import { API } from '../config/config';

const ShowImage = ({ product }) => (
  <div>
    <img
      src={`${API}/photo/${product._id}`}
      alt={product.name}
      style={{ maxHeight: '100%', maxWidth: '100%' }}
    />
  </div>
);

export default ShowImage;
