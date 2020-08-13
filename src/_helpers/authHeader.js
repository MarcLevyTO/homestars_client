export function authHeader() {
  // return authorization header with jwt token
  const jwt = localStorage.getItem('jwt');

  if (jwt && jwt !== '') {
    return { 'Authorization': `Bearer ${jwt}` };
  }
  return {};
}
