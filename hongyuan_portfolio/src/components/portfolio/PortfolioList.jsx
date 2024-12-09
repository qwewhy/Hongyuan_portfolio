import React from "react";
import PortfolioItem from "./PortfolioItem";
import Loading from "../common/Loading";

// 作品列表组件 / Portfolio list component
const PortfolioList = ({ portfolios, loading, error }) => {
  // 加载状态 / Loading state
  if (loading) {
    return <Loading />;
  }

  // 错误状态 / Error state
  if (error) {
    return <div className="text-center text-red-500 py-8">Error: {error}</div>;
  }

  // 空数据状态 / Empty state
  if (!portfolios || portfolios.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">No portfolios found.</div>
    );
  }

  // 正常渲染状态 / Normal render state
  return (
    <div className="space-y-6">
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
};

export default PortfolioList;
