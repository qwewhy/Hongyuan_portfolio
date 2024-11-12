import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器 / Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器 / Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权 / Handle unauthorized
          break;
        case 404:
          // 处理未找到 / Handle not found
          break;
        default:
          // 处理其他错误 / Handle other errors
          break;
      }
    }
    return Promise.reject(error);
  }
);

// API 接口封装 / API interface encapsulation
export const api = {
  // 作品相关接口 / Portfolio related interfaces
  getPortfolios: () => axiosInstance.get('/portfolios'),
  getPortfolio: (id) => axiosInstance.get(`/portfolios/${id}`),
  getFeaturedPortfolios: () => axiosInstance.get('/portfolios?featured=true'),
  createPortfolio: (data) => axiosInstance.post('/portfolios', data),
  updatePortfolio: (id, data) => axiosInstance.put(`/portfolios/${id}`, data),
  deletePortfolio: (id) => axiosInstance.delete(`/portfolios/${id}`),
  uploadImage: (formData) => axiosInstance.post('/portfolios/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
};

export default axiosInstance; 