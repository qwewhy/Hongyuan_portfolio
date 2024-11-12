import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import Button from '../common/Button';

// 单个作品展示组件 / Single portfolio item display component
const PortfolioItem = ({ portfolio }) => {
  const { t } = useTranslation();
  
  // 数据完整性检查 / Data integrity check
  if (!portfolio) {
    return null;
  }

  const { 
    id = '', 
    title = '', 
    description = '', 
    images = [], 
    skills = [], 
    likes = 0, 
    comments = 0 
  } = portfolio;

  // 获取第一张图片作为封面 / Get first image as cover
  const coverImage = images && images.length > 0 ? images[0].url : null;

  return (
    <Card className="mb-4">
      {/* 作品图片 / Portfolio image */}
      {coverImage && (
        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          <img 
            src={coverImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 作品内容 / Portfolio content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-secondary hover:text-primary">
          <Link to={`/portfolio/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-dark">{description}</p>

        {/* 技能标签 / Skill tags */}
        <div className="flex flex-wrap gap-2">
          {skills && skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-lighter rounded-full text-dark"
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* 交互按钮 / Interaction buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-lighter">
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
          <Link to={`/portfolio/${id}`}>
            <Button variant="outline" size="sm">
              {t('portfolio.viewDetails')}
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioItem; 