import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/manager/list',
    method: 'post',
    data: data || {}
  })
}
