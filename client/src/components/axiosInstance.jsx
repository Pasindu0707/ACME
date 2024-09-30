// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://acme-api.onrender.com', // Base URL for the API
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization headers or other configurations if necessary
    // For example, if you want to add a token:
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally if needed
    return Promise.reject(error);
  }
);

export default axiosInstance;
