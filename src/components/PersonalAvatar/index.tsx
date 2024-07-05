import React from 'react';
import { useI18n, useUser } from '@/hooks';
import { Avatar, ConfigProvider, Divider, Dropdown, MenuProps, Space, theme, Typography } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

export const PersonalAvatar: React.FC = () => {
  const { t } = useI18n();
  const { user } = useUser();
  const items: MenuProps['items'] = [
    {
      key: '/personal/index',
      label: t('personal.center'),
      icon: <UserOutlined/>
    },
    {
      key: '/personal/logout',
      label: t('personal.logout'),
      icon: <LogoutOutlined/>,
    }
  ];
  const { token } = theme.useToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  };
  return (
    <Dropdown className="ml-2" menu={ { items } } trigger={ ['click'] } arrow dropdownRender={ (menu) => (
      <div style={ contentStyle } className="flex flex-col">
        <Space direction="vertical" size={ 5 } className="px-4 py-2">
          <Typography.Text strong>{ user.name }</Typography.Text>
          { user.department ?
            <Typography.Text type="secondary">{ user.department }</Typography.Text> : null }
        </Space>
        <ConfigProvider theme={ { token: { marginLG: 0 } } }>
          <Divider type="horizontal"></Divider>
        </ConfigProvider>
        { React.cloneElement(menu as React.ReactElement, { style: menuStyle }) }
      </div>
    ) }>
      <Avatar size="large" src={ user.avatar } className="cursor-pointer"></Avatar>
    </Dropdown>
  );
};
