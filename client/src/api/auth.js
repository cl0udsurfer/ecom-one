import { API } from '../config/config';

export const register = user => {
  return fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = user => {
  return fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json(user);
    })
    .catch(err => {
      console.log(err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const logout = next => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    return fetch(`${API}/auth/logout`, {
      method: 'GET'
    })
      .then(response => {
        console.log('signout', response);
      })
      .catch(err => console.log(err));
  }
  next();
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};
