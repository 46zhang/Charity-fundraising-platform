const localStorage = window.localStorage;
const tokenKey = 'Authorization';
const usernameKey = 'username';
const userIdKey = 'userId';

export const getToken = () => localStorage.getItem(tokenKey);
export const setToken = (token) => localStorage.setItem(tokenKey, token);

export const getUsername = () => localStorage.getItem(usernameKey);
export const setUsername = (username) => localStorage.setItem(usernameKey, username);


export const getUserId = () => localStorage.getItem(userIdKey);
export const setUserId= (userId) => localStorage.setItem(userIdKey, userId);
