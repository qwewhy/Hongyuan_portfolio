import React from 'react';

// 通用卡片组件，用于展示内容块 / Common card component for displaying content blocks
const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`bg-white rounded-xl border border-lighter p-4 hover:shadow-md transition-shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 