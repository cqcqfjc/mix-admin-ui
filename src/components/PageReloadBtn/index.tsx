import { Button } from 'antd';
import React from 'react';
import { ReloadOutlined } from '@ant-design/icons';

/**
 * 页面刷新按钮
 * @constructor
 */
export const PageReloadBtn: React.FC = () => {
  return <Button className="hidden lg:flex hover:!text-white" type="text" size="large" icon={
    <ReloadOutlined/> }></Button>;
};
