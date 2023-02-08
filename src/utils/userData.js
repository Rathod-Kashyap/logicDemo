import React, {Component} from 'react';
import instance from '../api';

export default async function userData() {
  try {
    const options = {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        // 'Content-Length': data.length.toString(),
      },
      url: '/api/users',
    };
    const response = await instance(options);
    if (response.status == 200 && response.data) {
      return Promise.resolve(response);
    }
    return null;
  } catch (err) {
    return Promise.reject(err);
  }
}
