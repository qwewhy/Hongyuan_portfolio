import React from 'react';
import Button from './Button';

// 错误边界组件，用于捕获和处理组件树中的错误 / Error boundary component for catching and handling errors in the component tree
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // 初始化错误状态 / Initialize error state
    this.state = { hasError: false, error: null };
  }

  // 当子组件抛出错误时调用 / Called when a child component throws an error
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // 记录错误信息 / Log error information
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 错误回退UI / Error fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-lightest">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-secondary mb-4">
              抱歉，出现了一些问题 / Sorry, something went wrong
            </h1>
            <p className="text-dark mb-6">
              {this.state.error?.message || '请稍后再试 / Please try again later'}
            </p>
            <Button onClick={() => window.location.reload()}>
              刷新页面 / Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 