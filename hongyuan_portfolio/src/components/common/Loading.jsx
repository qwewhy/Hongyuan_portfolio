import React from 'react';

// 加载状态指示器组件 / Loading state indicator component
const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      {/* 加载动画 / Loading animation */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export default Loading; 