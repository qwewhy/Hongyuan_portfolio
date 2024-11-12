const Portfolio = require('../models/Portfolio');
const { validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');

// 作品集控制器 / Portfolio controller
class PortfolioController {
  // 获取所有作品 / Get all portfolios
  async getAllPortfolios(req, res, next) {
    try {
      const portfolios = await Portfolio.getAll();
      res.json({
        success: true,
        data: portfolios
      });
    } catch (error) {
      next(error);
    }
  }

  // 获取单个作品 / Get single portfolio
  async getPortfolioById(req, res, next) {
    try {
      const portfolio = await Portfolio.getById(req.params.id);
      if (!portfolio) {
        return res.status(404).json({
          success: false,
          message: '作品不存在 / Portfolio not found'
        });
      }
      res.json({
        success: true,
        data: portfolio
      });
    } catch (error) {
      next(error);
    }
  }

  // 创建作品 / Create portfolio
  async createPortfolio(req, res, next) {
    try {
      console.log('Creating portfolio with data:', req.body);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const portfolioId = await Portfolio.create(req.body);
      res.status(201).json({
        success: true,
        message: '作品创建成功 / Portfolio created successfully',
        data: { id: portfolioId }
      });
    } catch (error) {
      console.error('Error in createPortfolio:', error);
      next(error);
    }
  }

  // 更新作品 / Update portfolio
  async updatePortfolio(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const portfolio = await Portfolio.getById(req.params.id);
      if (!portfolio) {
        return res.status(404).json({
          success: false,
          message: '作品不存在 / Portfolio not found'
        });
      }

      await Portfolio.update(req.params.id, req.body);
      res.json({
        success: true,
        message: '作品更新成功 / Portfolio updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  // 删除作品 / Delete portfolio
  async deletePortfolio(req, res, next) {
    try {
      const portfolio = await Portfolio.getById(req.params.id);
      if (!portfolio) {
        return res.status(404).json({
          success: false,
          message: '作品不存在 / Portfolio not found'
        });
      }

      await Portfolio.delete(req.params.id);
      res.json({
        success: true,
        message: '作品删除成功 / Portfolio deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }

  // 上传图片 / Upload images
  async uploadImages(req, res, next) {
    try {
      const files = req.files;
      const sortOrders = req.body.sortOrder || [];

      if (!files || files.length === 0) {
        return res.status(400).json({
          success: false,
          message: '没有上传文件 / No files uploaded'
        });
      }

      const fileUrls = files.map((file, index) => ({
        url: `/uploads/${file.filename}`,
        sortOrder: Array.isArray(sortOrders) ? parseInt(sortOrders[index]) : index
      }));

      res.json({
        success: true,
        data: fileUrls
      });
    } catch (error) {
      if (req.files) {
        req.files.forEach(file => {
          const filePath = path.join(__dirname, '../../uploads', file.filename);
          fs.unlink(filePath, err => {
            if (err) console.error('Error deleting file:', err);
          });
        });
      }
      next(error);
    }
  }
}

module.exports = new PortfolioController(); 