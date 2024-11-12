const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const upload = require('../config/multer');
const { validatePortfolio } = require('../middleware/validator');

// 获取所有作品 / Get all portfolios
router.get('/', portfolioController.getAllPortfolios);

// 获取单个作品 / Get single portfolio
router.get('/:id', portfolioController.getPortfolioById);

// 上传图片 / Upload images - 放在创建作品之前
router.post('/upload', upload.array('images', 10), portfolioController.uploadImages);

// 创建作品 / Create portfolio
router.post('/', validatePortfolio, portfolioController.createPortfolio);

// 更新作品 / Update portfolio
router.put('/:id', validatePortfolio, portfolioController.updatePortfolio);

// 删除作品 / Delete portfolio
router.delete('/:id', portfolioController.deletePortfolio);

module.exports = router; 