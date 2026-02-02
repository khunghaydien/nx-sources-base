import { memo, useCallback } from 'react';
import { Button, Result } from 'antd';

export interface NotFoundProps {
  /** Text nút (mặc định: "Quay lại trang chủ"). */
  buttonText?: string;
  /** Callback khi bấm nút (vd: navigate('/')). */
  onBack?: () => void;
}

const NotFound = memo(function NotFound({ buttonText = 'Quay lại trang chủ', onBack }: NotFoundProps) {
  const handleBack = useCallback(() => {
    onBack?.();
  }, [onBack]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <Result
        status="404"
        title="404"
        subTitle="Trang bạn tìm kiếm không tồn tại."
        extra={
          onBack && (
            <Button type="primary" size="large" onClick={handleBack}>
              {buttonText}
            </Button>
          )
        }
      />
    </div>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;
