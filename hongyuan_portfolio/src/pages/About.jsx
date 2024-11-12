import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Mail, Linkedin, Download } from 'lucide-react';
import Button from '../components/common/Button';
import SkillCard from '../components/common/SkillCard';

// 关于页面组件 / About page component
const About = () => {
  const { t } = useTranslation();
  
  // 技能列表，必须与SkillCard组件中的技能一一对应 / Skill list, must match with SkillCard component
  const skills = [
    'React', 'Node.js', 'Django',
    'Unity3D', 'Unreal Engine5', 'Sqlite',
    'Git', 'AWS', 'Figma'
  ];

  return (
    <div className="max-w-2xl mx-auto py-12">
      {/* 个人简介 / Personal Introduction */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-secondary mb-6">{t('about.title')}</h1>
        <p className="text-lg text-dark mb-6">
          {t('about.introduction')}
        </p>
        <div className="flex gap-4">
          <Button>
            {t('about.downloadResume')}
            <Download size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* 技能列表 / Skills List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-6">{t('about.skills')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </section>

      {/* 联系方式 / Contact Information */}
      <section>
        <h2 className="text-2xl font-bold text-secondary mb-6">{t('about.contact')}</h2>
        <div className="space-y-4">
          <a 
            href="mailto:your.email@example.com"
            className="flex items-center text-dark hover:text-primary"
          >
            <Mail size={20} className="mr-3" />
            your.email@example.com
          </a>
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-dark hover:text-primary"
          >
            <Github size={20} className="mr-3" />
            Github
          </a>
          <a 
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-dark hover:text-primary"
          >
            <Linkedin size={20} className="mr-3" />
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;