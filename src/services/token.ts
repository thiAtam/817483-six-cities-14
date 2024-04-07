import { TokenType } from '../types/token';

const AUTH_TOKEN_TYPE = 'six-city-town';

function getToken() {
  const token = localStorage.getItem(AUTH_TOKEN_TYPE);
  return token ?? '';
}

function saveToken(token: TokenType) {
  localStorage.setItem(AUTH_TOKEN_TYPE, token);
}

function deleteToken() {
  localStorage.removeItem(AUTH_TOKEN_TYPE);
}

export {
  getToken,
  saveToken,
  deleteToken
};
