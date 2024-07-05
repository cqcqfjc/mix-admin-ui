import { theme, ThemeConfig } from 'antd';

export const ThemeDark: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  cssVar: {
    key: 'dark',
  },
  hashed: false,
  token: {
    colorPrimary: '#1890ff',
    colorBgContainer: 'rgba(20,20,20,.8)',
    borderRadius: 4,
  },
  components: {
    Layout: {
      bodyBg: 'inherit',
      headerPadding: '0 20px 0 0',
      headerBg: 'linear-gradient(to right, rgba(20,40,68, 1) , rgba(16,81,134, .8) 20%)',
      headerColor: '#fff',
      lightSiderBg: 'rgba(20,20,20, .8)'
    },
    Menu: {
      horizontalLineHeight: 48,
      horizontalItemBorderRadius: 4,
      iconSize: 18,
      itemBg: 'inherit',
      activeBarBorderWidth: 0,
    },
  }
};

