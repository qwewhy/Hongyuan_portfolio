import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PortfolioList from '../components/portfolio/PortfolioList';
import { useApp } from '../context/AppContext';
import Loading from '../components/common/Loading';

// 作品集页面组件 / Portfolio page component
const Portfolio = () => {
  const { t } = useTranslation();
  const { portfolios, loading, error, fetchPortfolios } = useApp();

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {t('common.error')}{error}
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-secondary mb-8">{t('portfolio.title')}</h1>
      <PortfolioList portfolios={portfolios} />
    </div>
  );
};

export default Portfolio; 