import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Loading from '../components/common/Loading';
import PortfolioDetailComponent from '../components/portfolio/PortfolioDetail';

const PortfolioDetail = () => {
  const { id } = useParams();
  const { fetchPortfolioById } = useApp();
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const data = await fetchPortfolioById(id);
        if (data) {
          setPortfolio(data);
        } else {
          setError('作品不存在');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolio();
  }, [id, fetchPortfolioById]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        出错了：{error}
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="text-center text-dark py-8">
        未找到该作品
      </div>
    );
  }

  return <PortfolioDetailComponent portfolio={portfolio} />;
};

export default PortfolioDetail; 