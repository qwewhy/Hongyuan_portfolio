import React from 'react';
import { ArrowLeft, Heart, MessageCircle, Share2, Github, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../common/Button';

// 作品详情展示组件 / Portfolio detail display component
const PortfolioDetail = ({ portfolio }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // 数据完整性检查 / Data integrity check
  if (!portfolio) {
    return (
      <div className="text-center text-gray-500 py-8">
        Portfolio not found.
      </div>
    );
  }

  const { 
    title = '', 
    description = '', 
    images = [], 
    skills = [], 
    content = '', 
    links = {}, 
    likes = 0, 
    comments = 0 
  } = portfolio;

  return (
    <article className="max-w-2xl mx-auto">
      {/* 返回按钮 / Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-dark hover:text-primary mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        {t('portfolio.back')}
      </button>

      {/* 作品标题 / Portfolio title */}
      <h1 className="text-3xl font-bold text-secondary mb-4">{title}</h1>

      {/* 作品图片 / Portfolio images */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src={image.url} 
                alt={`${title} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* 技能标签 / Skill tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skills && skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-sm bg-lighter rounded-full text-dark"
          >
            {skill.name}
          </span>
        ))}
      </div>

      {/* 项目简介 / Project introduction */}
      <p className="text-lg text-dark mb-6">{description}</p>

      {/* 详细内容 / Detailed content */}
      <div className="prose prose-lg max-w-none mb-8">
        {content}
      </div>

      {/* 相关链接 / Related links */}
      <div className="flex flex-wrap gap-4 mb-8">
        {links?.github && (
          <a 
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-dark hover:text-primary"
          >
            <Github size={20} className="mr-2" />
            {t('portfolio.sourceCode')}
          </a>
        )}
        {links?.demo && (
          <a 
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-dark hover:text-primary"
          >
            <ExternalLink size={20} className="mr-2" />
            {t('portfolio.liveDemo')}
          </a>
        )}
      </div>

      {/* 交互按钮 / Interaction buttons */}
      <div className="flex items-center justify-between py-4 border-t border-lighter">
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-dark hover:text-primary">
            <Heart size={20} />
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-2 text-dark hover:text-primary">
            <MessageCircle size={20} />
            <span>{comments}</span>
          </button>
          <button className="flex items-center space-x-2 text-dark hover:text-primary">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PortfolioDetail; 