import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../components/common/Button';
import PortfolioList from '../components/portfolio/PortfolioList';
import { useApp } from '../context/AppContext';
import Loading from '../components/common/Loading';

// 首页组件 / Home page component
const Home = () => {
  const { t } = useTranslation();
  const { fetchFeaturedPortfolios } = useApp();
  const [featuredPortfolios, setFeaturedPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedPortfolios = async () => {
      const data = await fetchFeaturedPortfolios();
      setFeaturedPortfolios(data);
      setLoading(false);
    };
    loadFeaturedPortfolios();
  }, [fetchFeaturedPortfolios]);

  return (
    <>
      {/* 英雄区域 / Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
          {t('home.greeting')}<span className="text-primary">{t('home.name')}</span>
        </h1>
        <p className="text-xl text-dark mb-8 max-w-2xl mx-auto">
          {t('home.description')}
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/portfolio">
            <Button size="lg">
              {t('home.viewPortfolio')}
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg">
              {t('home.learnMore')}
            </Button>
          </Link>
        </div>
      </section>

      {/* 精选作品 / Featured Projects */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-secondary mb-8">{t('home.featuredWorks')}</h2>
        {loading ? (
          <Loading />
        ) : (
          <PortfolioList portfolios={featuredPortfolios} />
        )}
      </section>
    </>
  );
};

export default Home; 