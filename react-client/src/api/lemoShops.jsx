import http from '.'

export function getShops() {
  return http.get('api/shop/')
}