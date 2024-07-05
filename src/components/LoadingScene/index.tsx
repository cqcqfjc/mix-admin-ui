import React from 'react';
import { Avatar } from 'antd';
import { useSettings } from '@/hooks';

export const LoadingScene: React.FC = () => {
  const { appLogo } = useSettings();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-28 h-28 flex items-center justify-center relative">
        <div className="w-28 h-28 rounded-full border-4 border-primary/20 border-t-primary/90 animate-spin">
        </div>
        <div className="w-28 h-28 absolute left-0 top-0 flex items-center justify-center">
          <Avatar size={ 96 } src={ appLogo }></Avatar>
        </div>
      </div>
    </div>
  );
};