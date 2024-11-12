const { body } = require('express-validator');

// 作品验证规则 / Portfolio validation rules
const validatePortfolio = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('标题不能为空 / Title is required')
    .isLength({ max: 200 })
    .withMessage('标题最多200个字符 / Title must not exceed 200 characters'),

  body('description')
    .trim()
    .notEmpty()
    .withMessage('描述不能为空 / Description is required')
    .isLength({ max: 2000 })
    .withMessage('描述最多2000个字符 / Description must not exceed 2000 characters'),

  body('featured')
    .optional()
    .isBoolean()
    .withMessage('featured必须是布尔值 / Featured must be a boolean')
    .toBoolean(),

  body('images')
    .optional()
    .isArray()
    .withMessage('images必须是数组 / Images must be an array'),

  body('images.*.url')
    .optional()
    .isString()
    .withMessage('图片URL必须是字符串 / Image URL must be a string'),

  body('images.*.sortOrder')
    .optional()
    .isInt({ min: 0 })
    .withMessage('排序必须是非负整数 / Sort order must be a non-negative integer'),

  body('skills')
    .optional()
    .isArray()
    .withMessage('skills必须是数组 / Skills must be an array'),

  body('skills.*.name')
    .optional()
    .isString()
    .withMessage('技能名称必须是字符串 / Skill name must be a string')
];

module.exports = {
  validatePortfolio
}; 