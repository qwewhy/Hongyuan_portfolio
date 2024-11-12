import React from 'react';
import { useTranslation } from 'react-i18next';

// 页面底部组件 / Page footer component
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-lighter py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-dark">
          <p className="mb-2">{t('footer.copyright')}</p>
          <p className="text-sm">
            {t('footer.builtWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 