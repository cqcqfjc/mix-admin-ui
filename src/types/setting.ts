import { ConfigProviderProps } from 'antd';

/**
 * 主题模式
 */
export type ThemeMode = 'light' | 'dark' | 'auto';
/**
 * 可用语言
 */
export type EnabledLocale = 'zh-CN' | 'zh-TW' | 'en';


/**
 * 应用配置
 */
export type AppSetting = {
  appName: string; // 应用名称
  appLogo: string; // 应用logo
  enableGithubBtn: boolean; // 是否显示github按钮
  enableGlobalSearch: boolean; // 是否显示全局搜索
  enableFullScreen: boolean; // 是否显示全屏按钮
  enableMessage: boolean; // 是否显示顶部消息
  enableCollapseToggleBtn: boolean; // 是否显示侧边栏折叠按钮
  enablePageReloadBtn: boolean; // 是否显示页面刷新按钮
  enableSwitchThemeBtn: boolean; // 是否显示切换主题按钮
  enableSwitchLangBtn: boolean; // 是否显示切换语言按钮
  enableLinearBg: boolean; // 是否显示动态背景
  locale: EnabledLocale, // 语言
  localeMessage?: Record<string, string>;
  theme: ThemeMode; // 主题颜色
  AntdConfig: ConfigProviderProps; // antd配置
  IconFontUrl: string;
}