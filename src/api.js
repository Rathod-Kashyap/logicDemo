import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://reqres.in',
  headers: {
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS,PATCH',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);
export default instance;

// import axios from 'axios';
// import {View} from 'native-base';
// import React, {Component} from 'react';

// const instance = axios.create({
//   baseURL: 'https://reqres.in/api/users?page=1&per_page=20',
//   headers: {
//     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS,PATCH',
//     'X-Custom-Header': 'foobar',
//     'Content-Type': 'application/json',
//   },
// });

// export const Call = (nam, j) => {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'post',
//       url: 'https://reqres.in/api/users',
//       data: {
//         name: nam,
//         job: j,
//       },
//     })
//       .then(response => {
//         resolve(response.data);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
// export const getData = () => {
//   return new Promise((res, reject) => {
//     axios
//       .get(instance.getUri())
//       .then(response => {
//         res(response.data.data);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
