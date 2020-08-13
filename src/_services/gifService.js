import { handleResponse } from '../_helpers';

export const gifService = {
  search
};

// @route     GET /gifSearch
// @desc      Register new user
// @access    Public
// @params    searchTerm
function search(searchTerm) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch(`${process.env.REACT_APP_BASE_URL}/gifSearch?searchTerm=${searchTerm}`, requestOptions).then(
    handleResponse
  ); 
}