import { Button, Dropdown, MenuProps, Tooltip } from 'antd';
import { ThemeMode } from '@/types';
import { useI18n, useTheme } from '@/hooks';
import React from 'react';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { ContrastViewCircle } from '@icon-park/react';

export const SwitchThemeBtn: React.FC = () => {
  const { theme, switchTheme } = useTheme();
  const { t } = useI18n();

  const items: MenuProps['items'] = [
    {
      key: 'auto',
      label: t('global.header.themeMode.auto'),
      icon: <ContrastViewCircle/>,
    },
    {
      key: 'light',
      label: t('global.header.themeMode.light'),
      icon: <SunOutlined/>,
    },
    {
      key: 'dark',
      label: t('global.header.themeMode.dark'),
      icon: <MoonOutlined/>,
    }
  ];
  const onClick: MenuProps['onClick'] = ({ key }) => {
    switchTheme(key as ThemeMode);
  };

  return (
    <Dropdown menu={ { items, selectedKeys: [theme], onClick } } trigger={ ['click'] } arrow>
      <Tooltip title={ t('global.header.tooltip.switchTheme') } mouseEnterDelay={ 1 }>
        <Button type="text" size="large" className="hover:!text-white">
          { theme === 'light' ? <SunOutlined/> : theme === 'dark' ?
            <MoonOutlined/> : <ContrastViewCircle/> }
        </Button>
      </Tooltip>
    </Dropdown>
  );
};
