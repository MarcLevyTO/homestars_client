import { authHeader } from '../_helpers';

export const userService = {
  signup,
  login,
  profile
};

function signup(username) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/users`, requestOptions).then(
    handleResponse
  ); 
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/login`, requestOptions).then(
    handleResponse
  );
}

function profile() {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/profile`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      return data;
    }
    return data;
  });
}
