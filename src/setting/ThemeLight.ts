import { theme, ThemeConfig } from 'antd';

export const ThemeLight: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  cssVar: {
    key: 'default',
  },
  hashed: false,
  token: {
    colorBgContainer: 'rgba(255,255,255,.8)',
    colorPrimary: '#1890ff',
    borderRadius: 4,
  },
  components: {
    Layout: {
      bodyBg: 'inherit',
      headerPadding: '0 20px 0 0',
      headerBg: 'linear-gradient(to right, rgba(20,40,68, 1) , rgba(16,81,134, .8) 35%)',
      headerColor: '#fff',
      lightSiderBg: 'inherit',
      footerPadding: '5px 10px',
      footerBg: 'inherit',
    },
    Menu: {
      horizontalLineHeight: 48,
      horizontalItemBorderRadius: 4,
      iconSize: 18,
      itemBg: 'inherit',
      activeBarBorderWidth: 0,
      horizontalItemHoverBg: 'rgba(255,255,255,.1)',
    }
  },
};
