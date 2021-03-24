import request from '../utils/request';

export function login(userPhone, userPassword) {
  const data = {
    'userPhone': userPhone,
    'userPassword':userPassword
  };
  return request.post('user/login',data);

}

export function getInfo() {
  return request({
    url: '/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function fetchList(params) {
  return request({
    url: '/list',
    method: 'get',
    params: params
  })
}

export function createAdmin(data) {
  return request({
    url: '/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/delete/' + id,
    method: 'post'
  })
}

export function getRoleByAdmin(id) {
  return request({
    url: '/role/' + id,
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/role/update',
    method: 'post',
    data: data
  })
}
