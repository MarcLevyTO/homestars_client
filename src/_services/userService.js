import { authHeader, handleResponse } from '../_helpers';

export const userService = {
  signup,
  login,
  profile
};

// @route     POST /users
// @desc      Register new user
// @access    Public
// @params    username, password
function signup(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/users`, requestOptions).then(
    handleResponse
  ); 
}

// @route     POST /login
// @desc      Fetch user JWT token
// @access    Public
// @params    username, password
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

// @route     POST /profile
// @desc      Fetch user's profile
// @access    User
// @params
function profile() {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/profile`, requestOptions).then(
    handleResponse
  );
}