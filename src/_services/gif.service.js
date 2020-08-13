export const gifService = {
  search
};

function search(searchTerm) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/gifSearch?searchTerm=${searchTerm}`, requestOptions).then(
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
