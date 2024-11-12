import React from 'react';

// 通用按钮组件 / Common button component
const Button = ({ 
  children, 
  variant = 'primary', // 按钮样式变体 / Button style variant
  size = 'md',         // 按钮大小 / Button size
  className = '',      // 额外的样式类 / Additional style classes
  ...props 
}) => {
  // 基础样式 / Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors';
  
  // 样式变体 / Style variants
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white',
    secondary: 'bg-lighter hover:bg-light text-dark',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };

  // 尺寸变体 / Size variants
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 