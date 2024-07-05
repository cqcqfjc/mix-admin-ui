import React from 'react';
import { Layout } from 'antd';
import { useSettings } from '@/hooks';

export const MixLayout: React.FC = () => {
  const setting = useSettings();
  return (
    <Layout className={ `w-full h-screen overflow-hidden ${ !setting.enableLinearBg ? 'dark:bg-black' : '' }` }>

    </Layout>
  );
};