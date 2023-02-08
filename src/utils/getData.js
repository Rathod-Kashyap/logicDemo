import instance from '../api';

export default async function getData() {
  try {
    const options = {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        // 'Content-Length': data.length.toString(),
      },
      url: '/api/users?page=1&per_page=20',
    };
    const response = await instance(options);
    if (response.status === 200 && response.data) {
      return Promise.resolve(response);
    }
    return null;
  } catch (err) {
    return Promise.reject(err);
  }
}
