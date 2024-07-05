import React from 'react';
import { AdminContextProvider, AntdContextProvider, ApiContextProvider, defaultApi } from '@/contexts';
import { AdminProps, IAdminContext } from '@/types';
import { defaultSetting } from '@/setting';
import { I18nextProvider } from 'react-i18next';
import { LinearBg } from '@/components';

export const Admin: React.FC<AdminProps> = ({ children, apiProvider, i18n }) => {
  const contextProps: IAdminContext = {
    setting: defaultSetting,
    i18n: i18n,
  };
  return (
    <AdminContextProvider { ...contextProps }>
      <I18nextProvider i18n={ i18n! }>
        <ApiContextProvider apiProvider={ apiProvider || defaultApi() }>
          <AntdContextProvider>
            <LinearBg enabled={ defaultSetting.enableLinearBg }/>
            { children }
          </AntdContextProvider>
        </ApiContextProvider>
      </I18nextProvider>
    </AdminContextProvider>
  );
};