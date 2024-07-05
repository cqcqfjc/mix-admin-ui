import React, { useEffect, useState } from 'react';
import { useI18n } from '@/hooks';
import { Button, Tooltip } from 'antd';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';

/**
 * 全屏按钮
 * @constructor
 */
export const FullScreenBtn: React.FC = () => {
  const { t } = useI18n();
  const [fullScreen, setFullScreen] = useState(false);
  useEffect(() => {
    if (document.fullscreenElement) {
      setFullScreen(true);
    }
  }, []);
  // 切换全屏
  const toggleFullScreen = () => {
    const element = document.documentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        setFullScreen(false);
      });
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen().then(() => {
          setFullScreen(true);
        });
      }
    }
  };
  return (
    <Tooltip className="hidden xl:flex" title={ t('global.header.tooltip.fullscreen') } mouseEnterDelay={ 1 }>
      <Button onClick={ toggleFullScreen } type="text" size="large" className="hover:!text-white">
        { fullScreen ? <FullscreenExitOutlined/> : <FullscreenOutlined/> }
      </Button>
    </Tooltip>
  );
};
