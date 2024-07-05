import { useI18n } from '@/hooks';
import { Button, Tooltip } from 'antd';
import React from 'react';
import { GithubOutlined } from '@ant-design/icons';

/**
 * Github按钮
 * @constructor
 */
export const GithubBtn: React.FC = () => {
  const { t } = useI18n();
  const navigateGithub = () => {
    window.open('https://github.com/cqcqfjc/mix-admin');
  };
  return (
    <Tooltip className="hidden xl:flex" title={ t('global.header.tooltip.github') } mouseEnterDelay={ 1 }>
      <Button onClick={ navigateGithub } type="text" size="large" className="hover:!text-white">
        <GithubOutlined/>
      </Button>
    </Tooltip>
  );
};
