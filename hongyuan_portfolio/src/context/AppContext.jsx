import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from '../api/axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 获取所有作品
  const fetchPortfolios = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.getPortfolios();
      if (response.success) {
        setPortfolios(response.data);
        setError(null);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 获取单个作品详情
  const fetchPortfolioById = useCallback(async (id) => {
    try {
      setLoading(true);
      const response = await api.getPortfolio(id);
      if (response.success) {
        return response.data;
      }
      return null;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // 获取精选作品
  const fetchFeaturedPortfolios = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.getFeaturedPortfolios();
      if (response.success) {
        return response.data;
      }
      return [];
    } catch (err) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // 上传图片
  const uploadImage = useCallback(async (file) => {
    try {
      const formData = new FormData();
      formData.append('images', file);
      const response = await api.uploadImage(formData);
      if (response.success) {
        return response.data[0];
      }
      return null;
    } catch (err) {
      setError(err.message);
      return null;
    }
  }, []);

  const value = {
    portfolios,
    loading,
    error,
    fetchPortfolios,
    fetchPortfolioById,
    fetchFeaturedPortfolios,
    uploadImage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}; 