import React from 'react';
import { Button } from 'antd';
import { useMenu } from '@/hooks';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

/**
 * 侧边栏收起展开按钮
 * @constructor
 */
export const SideCollapseBtn: React.FC = () => {
  const { collapsed, setCollapsed } = useMenu();
  return (
    <Button onClick={ () => setCollapsed(!collapsed) } className="hidden xl:flex hover:!text-white" type="text" size="large" icon={ collapsed ?
      <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }></Button>
  );
};
