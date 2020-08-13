export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    return data;
  });
}