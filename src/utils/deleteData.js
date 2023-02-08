import React, {Component} from 'react';
import instance from '../api';

export default async function deleteData(i) {
  try {
    const options = {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        // 'Content-Length': data.length.toString(),
      },
      url: '/api/users/`${i}`',
      data: {
        id: i,
      },
    };
    const response = await instance(options);
    if (response.status === 204 && response) {
      return Promise.resolve(response);
    }
    return null;
  } catch (err) {
    return Promise.reject(err);
  }
}
