require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const portfolioRoutes = require('./routes/portfolioRoutes');
const errorHandler = require('./middleware/errorHandler');
const { initializeDatabase } = require('./config/database');

const app = express();

// 初始化数据库
initializeDatabase();

// 中间件
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静态文件服务
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// 管理界面路由 / Admin interface route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/admin.html'));
});

// API路由
app.use('/api/portfolios', portfolioRoutes);

// 错误处理
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 