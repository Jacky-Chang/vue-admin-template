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

// ----------------------------------- 注意，上边为公共登录登出接口

export function getList(data) {
  return request({
    url: '/user/list',
    method: 'post',
    data: data || {}
  })
}
