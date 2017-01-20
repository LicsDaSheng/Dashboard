/**
 * Created by Scott on 2017/1/9.
 */
import request from '../utils/request';

export function login(values) {
	return request('/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(values)
	})
}

export function logout() {
	return request('/api/logout', {
		method: 'GET'
	})
}