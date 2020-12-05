const localStorage = window.localStorage;
const tokenKey = 'Authorization';

export const getToken = () => localStorage.getItem(tokenKey);
export const setToken = (token) => localStorage.setItem(tokenKey, token);
