import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

// 主布局组件，包含页面的基本结构 / Main layout component containing the basic structure of the page
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-lightest">
      <Header />
      <div className="container mx-auto px-4 flex gap-4">
        {/* 左侧边栏 / Left sidebar */}
        <Sidebar className="w-1/4 hidden lg:block" />
        
        {/* 主要内容区域 / Main content area */}
        <main className="flex-1 max-w-2xl mx-auto">
          {children}
        </main>
        
        {/* 右侧边栏（预留） / Right sidebar (reserved) */}
        <div className="w-1/4 hidden lg:block">
          {/* 可以添加其他内容 / Can add other content */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout; 