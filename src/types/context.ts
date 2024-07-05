import { i18n } from 'i18next';
import { AppSetting, IMenus, IResponse, LoginRequest, LoginResponse, UserInfo } from '@/types';
import React from 'react';

export type AdminProps = {
  children?: React.ReactNode;
  apiProvider?: IApiContext;
  i18n?: i18n
}
export type IAdminContext = {
  setting: AppSetting;
  i18n?: i18n;
  menus?: IMenus[];
  setMenus?: (menus: IMenus[]) => void;
  user?: UserInfo;
  setUser?: (user: UserInfo) => void;
}

/**
 * @description: api context
 */
export interface IApiContext {
  getMenus: () => Promise<IResponse<IMenus[]>>;
  login: (data: LoginRequest) => Promise<IResponse<LoginResponse>>;
  logout: () => Promise<IResponse<void>>;
  checkLogin: () => boolean;
}
