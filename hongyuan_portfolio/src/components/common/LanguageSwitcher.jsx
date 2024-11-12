import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

// 语言切换器组件 / Language switcher component
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // 切换语言函数 / Function to toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-dark hover:text-primary p-2 rounded-full hover:bg-lighter"
      aria-label={i18n.language === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <Globe size={20} />
      <span>{i18n.language === 'zh' ? 'EN' : '中'}</span>
    </button>
  );
};

export default LanguageSwitcher; 