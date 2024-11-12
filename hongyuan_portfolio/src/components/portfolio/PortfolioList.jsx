import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioList = ({ portfolios }) => {
  return (
    <div className="space-y-6">
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
};

export default PortfolioList; 