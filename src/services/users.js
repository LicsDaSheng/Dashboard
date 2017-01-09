import request from '../utils/request';
import {PAGE_SIZE} from '../constants';
export function fetch({page}){
    return request(`/api/users/findall?page=${page}&size=${PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
    return request(`/api/users/${id}`, {
        method: 'PATCH',
        headers: {
                   'Content-Type': 'application/json'
               },
        body: JSON.stringify(values),
    });
}

export function create(values){
    return request('/api/users/addUser',{
        method: 'PUT',
        headers: {
                   'Content-Type': 'application/json'
               },
        body:JSON.stringify(values),
    })
}