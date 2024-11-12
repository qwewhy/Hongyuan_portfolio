import React, { useEffect } from 'react';
import PortfolioList from '../components/portfolio/PortfolioList';
import { useApp } from '../context/AppContext';
import Loading from '../components/common/Loading';

const Portfolio = () => {
  const { portfolios, loading, error, fetchPortfolios } = useApp();

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        出错了：{error}
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-secondary mb-8">我的作品</h1>
      <PortfolioList portfolios={portfolios} />
    </div>
  );
};

export default Portfolio; 