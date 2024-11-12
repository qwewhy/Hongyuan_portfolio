import React, { useState } from 'react';

const skillDetails = {
  'React': [
    'HTML/CSS/JavaScript',
    'React Router',
    'Axios',
    'Redux',
    'Three.js',
    'Tailwind CSS',
    'Lucide-React',
    'Material-UI',
    'i18n',
  ],
  'Node.js': [
    'JavaScript',
    'Express',
    'MVC Pattern',
    'Sqlite',
    'RESTful API',
    'WebSocket',
    'JWT Auth'
  ],
  'Django': [
    'Python',
    'MTV Pattern',
    'Django REST',
    'Django ORM',
    'Celery',
    'PostgreSQL',
    'Django Channels',
    'Django Auth'
  ],
  'Unity3D': [
    'Unity C#',
    'Unity UI',
    'Unity Physics',
    'Unity Animation',
    'Unity Shader',
    'Unity AR/VR'
  ],
  'Unreal Engine5': [
    'Blueprint',
    'UE Physics',
    'UE Animation',
    'UE Material',
    'UE Niagara'
  ],
  'Sqlite': [
    'SQL',
    'Database Design',
    'Query Optimization',
    'Data Migration',
    'SQLite Studio',
    'Version Control'
  ],
  'Git': [
    'Version Control',
    'Branch Management',
    'Git Flow',
    'Code Review',
    'GitHub Actions',
    'GitLab CI/CD'
  ],
  'AWS': [
    'EC2',
    'S3',
    'Lambda',
    'RDS',
    'CloudFront',
    'Route 53'
  ],
  'Figma': [
    'UI Design',
    'Prototyping',
    'Components',
    'Auto Layout',
    'Collaboration',
    'Design System'
  ],
  'Docker': [

  ]
};

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      <div 
        className="p-4 bg-white rounded-xl border border-lighter cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {skill}
      </div>
      
      {/* 悬浮卡片 */}
      {isHovered && (
        <div className="absolute z-10 w-48 bg-white rounded-xl shadow-lg border border-lighter p-4 mt-2 transform -translate-x-1/4 transition-all duration-300">
          <h3 className="font-bold text-primary mb-2">{skill}</h3>
          <ul className="space-y-1">
            {skillDetails[skill].map((detail, index) => (
              <li 
                key={index}
                className="text-sm text-dark"
              >
                • {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillCard; 