import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button, Result } from 'antd';

export interface ErrorBoundaryProps {
  children: ReactNode;
  /** Custom UI khi lỗi (nếu không truyền thì dùng màn 500 mặc định). */
  fallback?: ReactNode;
  /** Callback khi bắt được lỗi (log, report...). */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary dùng chung cho tất cả dự án.
 * Bắt lỗi render trong cây con, hiển thị fallback hoặc màn 500 (Ant Design Result).
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <Result
          status="error"
          title="Đã xảy ra lỗi"
          subTitle="Xin lỗi, đã xảy ra lỗi không mong muốn. Vui lòng thử lại."
          extra={
            <Button type="primary" onClick={this.handleReset}>
              Thử lại
            </Button>
          }
        />
      );
    }
    return this.props.children;
  }
}
