import React from 'react';
import { ConfigProvider } from 'antd';
import { useI18n, useSettings, useTheme } from '@/hooks';

export const AntdContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { AntdConfig } = useSettings();
  const { antdLocale } = useI18n();
  const { config } = useTheme();
  return (
    <ConfigProvider { ...AntdConfig } locale={ antdLocale } theme={ config }>
      { children }
    </ConfigProvider>
  );
};