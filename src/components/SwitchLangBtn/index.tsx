import React from 'react';
import { useI18n } from '@/hooks';
import { Button, Dropdown, MenuProps, Tooltip } from 'antd';
import { EnabledLocale } from '@/types';
import { TranslationOutlined } from '@ant-design/icons';

export const SwitchLangBtn: React.FC = () => {
  const { t, locale, switchLocale } = useI18n();
  const items: MenuProps['items'] = [
    {
      key: 'zh-CN',
      label: t('global.header.lang.zhCN')
    },
    {
      key: 'zh-TW',
      label: t('global.header.lang.zhTW')
    },
    {
      key: 'en',
      label: t('global.header.lang.enUS')
    }
  ];

  const onClick: MenuProps['onClick'] = ({ key }) => {
    switchLocale(key as EnabledLocale);
  };
  return (
    <Dropdown menu={ {
      items,
      selectedKeys: [locale],
      onClick
    } } trigger={ ['click'] } arrow>
      <Tooltip title={ t('global.header.tooltip.switchLang') } mouseEnterDelay={ 1 }>
        <Button type="text" size="large" className="hover:!text-white">
          <TranslationOutlined/>
        </Button>
      </Tooltip>
    </Dropdown>
  );
};
