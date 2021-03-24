const localStorage = window.localStorage;
const tokenKey = 'Authorization';
const usernameKey = 'username';

export const getToken = () => localStorage.getItem(tokenKey);
export const setToken = (token) => localStorage.setItem(tokenKey, token);

export const getUsername = () => localStorage.getItem(usernameKey);
export const setUsername = (username) => localStorage.setItem(usernameKey, username);
