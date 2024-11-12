import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';

// 页面顶部导航组件 / Page header navigation component
const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-lighter">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            HY
          </Link>

          {/* 桌面端导航 / Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-dark hover:text-primary">
              <Home size={20} />
              <span>{t('header.home')}</span>
            </Link>
            <Link to="/portfolio" className="flex items-center space-x-2 text-dark hover:text-primary">
              <Briefcase size={20} />
              <span>{t('header.portfolio')}</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-dark hover:text-primary">
              <User size={20} />
              <span>{t('header.about')}</span>
            </Link>
          </nav>

          {/* 语言切换器 / Language Switcher */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            {/* 移动端菜单按钮 / Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-full hover:bg-lighter">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 