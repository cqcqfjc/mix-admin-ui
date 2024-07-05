import React from 'react';

/**
 * @description: 接口统一返回数据类型
 */
export type IResponse<T> = {
  code: number;
  data: T;
  message?: string;
  timestamp?: string;
  traceId?: string;
}
/**
 * @description: 菜单类型
 */
export type IMenus = {
  id: number;
  label: string;
  name: string;
  path: string;
  icon: string;
  sort: number;
  in_menu: boolean;
  disabled: boolean;
  type: 'item' | 'group' | 'divider';
  active_keys: string[];
  children?: IMenus[];
  element?: React.FC;
}


export type UserInfo = {
  username: string;
  password: string;
}
/**
 * @description: 授权响应参数
 */
export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
}

/**
 * @description: 登录请求参数
 */
export type LoginRequest = {
  username: string;
  password: string;
}
/**
 * @description: 登录响应参数
 */
export type LoginResponse = { user: UserInfo } & AuthResponse