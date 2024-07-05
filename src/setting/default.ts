import { AppSetting } from '@/types';
import logo from '@/assets/mix-logo.svg';
import zh_CN from 'antd/locale/zh_CN';

export const defaultSetting: AppSetting = {
  appName: import.meta.env.VITE_APP_NAME || 'Mix Admin',
  appLogo: logo,
  enableGithubBtn: true,
  enableGlobalSearch: true,
  enableFullScreen: true,
  enableMessage: true,
  enableSideCollapseBtn: true,
  enablePageReloadBtn: true,
  enableSwitchThemeBtn: true,
  enableSwitchLangBtn: true,
  enableLinearBg: true,
  locale: 'zh-CN',
  theme: 'auto',
  AntdConfig: {
    locale: zh_CN,
    direction: 'ltr',
  },
  IconFontUrl: '//at.alicdn.com/t/c/font_4602024_mzie7arzicp.js'
};
