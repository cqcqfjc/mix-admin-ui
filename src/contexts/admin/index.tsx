import React, { PropsWithChildren } from 'react';
import { IAdminContext } from '@/types';
import { defaultSetting } from '@/setting';

export const AdminContext = React.createContext<IAdminContext>({ setting: defaultSetting });

export const AdminContextProvider: React.FC<PropsWithChildren<IAdminContext>> = ({ children, ...props }) => {
  return (
    <AdminContext.Provider value={ props }>
      { children }
    </AdminContext.Provider>
  );
};
