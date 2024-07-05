import { Result, Typography } from 'antd';
import React from 'react';

/**
 * 错误显示组件
 * @param error
 * @constructor
 */
export const ErrorScene: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <Result className="error-scene flex w-full h-screen flex-col items-center justify-center" status="error" title={ error.name } subTitle={ error.message }>
      <Typography.Text>
        { error.stack }
      </Typography.Text>
    </Result>
  );
};
