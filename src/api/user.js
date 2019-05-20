import request from '@/utils/request'

export function login(role, data) {
  return request({
    url: '/' + role + '/login',
    method: 'post',
    data
  })
}

export function getInfo(role, token) {
  return request({
    url: '/' + role + '/info',
    method: 'get',
    params: { token }
  })
}

export function logout(role) {
  return request({
    url: '/' + role + '/logout',
    method: 'post'
  })
}
