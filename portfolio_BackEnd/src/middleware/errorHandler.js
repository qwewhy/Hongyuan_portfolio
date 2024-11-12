// 错误处理中间件 / Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // 处理文件上传错误 / Handle file upload errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      success: false,
      message: '文件大小超出限制 / File size exceeds limit'
    });
  }

  // 处理数据库错误 / Handle database errors
  if (err.code === 'SQLITE_CONSTRAINT') {
    return res.status(400).json({
      success: false,
      message: '数据约束错误 / Data constraint error'
    });
  }

  // 默认错误响应 / Default error response
  res.status(500).json({
    success: false,
    message: '服务器内部错误 / Internal server error'
  });
};

module.exports = errorHandler; 