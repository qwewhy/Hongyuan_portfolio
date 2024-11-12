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
      const data = await api.getPortfolios();
      setPortfolios(data);
      setError(null);
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
      const data = await api.getPortfolio(id);
      return data;
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
      const data = await api.getPortfolios();
      // 假设后端会返回一个 featured 字段标记精选作品
      return data.filter(item => item.featured);
    } catch (err) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    portfolios,
    loading,
    error,
    fetchPortfolios,
    fetchPortfolioById,
    fetchFeaturedPortfolios,
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