# Hongyuan Portfolio / 洪源作品集

基于 React 的个人作品集网站，采用 Twitter 风格的界面设计，支持中英文双语切换。
A personal portfolio website based on React with Twitter-style UI design and bilingual support.

## 技术栈 / Tech Stack

- React 18
- React Router v6
- Tailwind CSS
- Lucide Icons
- i18next (国际化 / Internationalization)
- Axios (API 请求 / API requests)

## 主要功能 / Key Features

- 响应式设计 / Responsive Design
  - 移动端适配 / Mobile-friendly
  - 桌面端优化 / Desktop optimized
  
- 作品展示 / Portfolio Display
  - 作品列表 / Portfolio List
  - 作品详情 / Portfolio Details
  - 技术标签 / Technology Tags
  - 交互功能 / Interactive Features
  
- 国际化支持 / Internationalization
  - 中英文切换 / Chinese-English Switch
  - 自动语言检测 / Auto Language Detection
  
- 技能展示 / Skills Showcase
  - 悬浮详情 / Hover Details
  - 分类展示 / Categorized Display
  
- 后端集成 / Backend Integration
  - RESTful API
  - 数据持久化 / Data Persistence

## 项目结构 / Project Structure

```
hongyuan_portfolio/
├── src/
│   ├── api/              # API 请求封装 / API request encapsulation
│   ├── components/       # 组件 / Components
│   │   ├── common/       # 通用组件 / Common components
│   │   ├── layout/       # 布局组件 / Layout components
│   │   └── portfolio/    # 作品相关组件 / Portfolio components
│   ├── context/         # 状态管理 / State management
│   ├── i18n/           # 国际化配置 / i18n configuration
│   ├── pages/          # 页面组件 / Page components
│   ├── styles/         # 样式文件 / Style files
│   └── utils/          # 工具函数 / Utility functions
```

## 开始使用 / Getting Started

1. 克隆仓库 / Clone the repository:
```bash
git clone https://github.com/yourusername/hongyuan_portfolio.git
cd hongyuan_portfolio
```

2. 安装依赖 / Install dependencies:
```bash
npm install
```

3. 启动开发服务器 / Start development server:
```bash
npm start
```

4. 构建生产版本 / Build for production:
```bash
npm run build
```

## API 文档 / API Documentation

### 作品相关接口 / Portfolio Endpoints

- GET /api/portfolios - 获取作品列表 / Get portfolio list
- GET /api/portfolios/:id - 获取作品详情 / Get portfolio details
- GET /api/portfolios/featured - 获取精选作品 / Get featured portfolios

## 组件说明 / Component Documentation

### 通用组件 / Common Components
- Button - 通用按钮组件 / Common button component
- Card - 通用卡片组件 / Common card component
- Loading - 加载状态组件 / Loading state component
- ErrorBoundary - 错误边界组件 / Error boundary component
- LanguageSwitcher - 语言切换组件 / Language switcher component

### 布局组件 / Layout Components
- Layout - 页面布局组件 / Page layout component
- Header - 页面头部组件 / Page header component
- Footer - 页面底部组件 / Page footer component
- Sidebar - 侧边栏组件 / Sidebar component

### 作品组件 / Portfolio Components
- PortfolioList - 作品列表组件 / Portfolio list component
- PortfolioItem - 作品项目组件 / Portfolio item component
- PortfolioDetail - 作品详情组件 / Portfolio detail component

## 国际化支持 / Internationalization Support

项目支持中英文切换，使用 i18next 实现。语言文件位于 `src/i18n/locales/` 目录。
The project supports Chinese and English languages using i18next. Language files are located in the `src/i18n/locales/` directory.

## 贡献指南 / Contributing

1. Fork 项目 / Fork the project
2. 创建特性分支 / Create feature branch
3. 提交改动 / Commit changes
4. 推送到分支 / Push to branch
5. 创建 Pull Request / Create Pull Request

## 许可证 / License

MIT

## 联系方式 / Contact

- Email: Hongyuan.Wang@student.uts.edu.com
- GitHub: [qwewhy](https://github.com/qwewhy)