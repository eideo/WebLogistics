import fetch from '@/utils/fetch2';

export function getOrderList(params) {
  return fetch({
    url: '/v1/order/page',
    method: 'get',
    params
  });
}