# Hongyuan Portfolio Backend

基于 Node.js + Express + SQLite 的个人作品集网站后端 API 服务。

## 技术栈

- Node.js
- Express
- SQLite3
- Multer - 文件上传
- Express-validator - 请求验证

## 数据库结构

### 作品集表 (portfolios)
- id: INTEGER PRIMARY KEY
- title: TEXT
- description: TEXT
- featured: BOOLEAN
- created_at: DATETIME
- updated_at: DATETIME

### 图片表 (portfolio_images)
- id: INTEGER PRIMARY KEY
- portfolio_id: INTEGER (外键)
- url: TEXT
- caption: TEXT
- sort_order: INTEGER

### 技能标签表 (portfolio_skills)
- id: INTEGER PRIMARY KEY
- portfolio_id: INTEGER (外键)
- name: TEXT

### 笔记表 (portfolio_notes)
- id: INTEGER PRIMARY KEY
- portfolio_id: INTEGER (外键)
- content: TEXT

## API 功能

### 作品集管理
- 获取作品列表 (GET /api/portfolios)
- 获取单个作品 (GET /api/portfolios/:id)
- 创建新作品 (POST /api/portfolios)
- 更新作品信息 (PUT /api/portfolios/:id)
- 删除作品 (DELETE /api/portfolios/:id)
- 作品图片上传 (POST /api/portfolios/upload)


