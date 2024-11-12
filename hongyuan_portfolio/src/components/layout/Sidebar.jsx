import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Github, Mail, Linkedin } from 'lucide-react';

const Sidebar = ({ className }) => {
  return (
    <aside className={`py-4 ${className}`}>
      <nav className="sticky top-20">
        <div className="space-y-8">
          {/* Navigation Links */}
          <div className="space-y-2">
            <Link to="/" className="flex items-center space-x-3 px-4 py-2 text-dark hover:bg-lighter rounded-full">
              <Home size={24} />
              <span>首页</span>
            </Link>
            <Link to="/portfolio" className="flex items-center space-x-3 px-4 py-2 text-dark hover:bg-lighter rounded-full">
              <Briefcase size={24} />
              <span>作品</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-3 px-4 py-2 text-dark hover:bg-lighter rounded-full">
              <User size={24} />
              <span>关于</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="flex items-center space-x-3 px-4 py-2 text-dark hover:bg-lighter rounded-full">
              <Github size={24} />
              <span>Github</span>
            </a>
            <a href="mailto:your.email@example.com" 
               className="flex items-center space-x-3 px-4 py-2 text-dark hover:bg-lighter rounded-full">
              <Mail size={24} />
              <span>邮箱</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
               className="flex items-center space-x-3 px-4 py-2 text-dark hover:bg-lighter rounded-full">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar; 