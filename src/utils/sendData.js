import React, {Component} from 'react';
import instance from '../api';

export default async function sendData(nam, j) {
  try {
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        // 'Content-Length': data.length.toString(),
      },
      url: '/api/users',
      data: {
        name: nam,
        job: j,
      },
    };
    const response = await instance(options);
    if (response.status === 201 && response.data) {
      return Promise.resolve(response);
    }
    return null;
  } catch (err) {
    return Promise.reject(err);
  }
}
