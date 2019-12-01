import { API } from '../config/config';

export const addCategory = (userId, token, category) => {
  return fetch(`${API}/category`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const removeCategory = (token, categoryId) => {
  return fetch(`${API}/category/${categoryId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const removeProduct = (token, productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const addProduct = (userId, token, product) => {
  return fetch(`${API}/product`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCategory = categoryId => {
  return fetch(`${API}/category/${categoryId}`, {
    method: 'GET'
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getCategories = () => {
  return fetch(`${API}/category`, {
    method: 'GET'
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getProducts = () => {
  return fetch(`${API}/product`, {
    method: 'GET'
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getProductsByCategory = categoryId => {
  return fetch(`${API}/category/${categoryId}/product`, {
    method: 'GET'
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getProduct = productId => {
  return fetch(`${API}/product/${productId}`, {
    method: 'GET'
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
