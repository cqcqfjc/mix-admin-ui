import { ModalFuncProps } from 'antd/es/modal/interface';
import React, { useState } from 'react';
import { App, Card, ConfigProvider, Input, List, Typography } from 'antd';
import { useKeyPress, useLatest } from 'ahooks';
import { useI18n } from '@/hooks';
import { Icon } from '@iconify/react';

export const useGlobalSearch = () => {
  const { modal } = App.useApp();
  const [instance, setInstance] = useState<any>();
  const latestInstance = useLatest(instance);
  const { t } = useI18n();

  let quickKey = 'Ctrl K';
  if ('NavigatorUAData' in navigator) {
    // @ts-expect-error NavigatorUAData is not defined in typescript 5.4.5
    if (navigator.userAgentData.platform === 'macOS') {
      quickKey = '⌘';
    }
  } else if ('platform' in navigator) {
    if (navigator.platform.includes('Mac')) {
      quickKey = '⌘K';
    }
  }

  const ToggleModal = async () => {
    if (latestInstance.current) {
      latestInstance.current.destroy();
      setInstance(null);
      return;
    }
    setInstance(modal.info(modalConfig));
  };


  if (quickKey === '⌘K') {
    useKeyPress(['meta.k'], ToggleModal);
  } else {
    useKeyPress(['ctrl.k'], ToggleModal);
  }
  useKeyPress(['esc'], () => {
    if (latestInstance.current) {
      latestInstance.current.destroy();
      setInstance(null);
    }
  });

  const mockData = [
    {
      group: '菜单',
      list: [
        {
          content: '控制面板',
          path: '/',
        },
        {
          content: '系统设置',
          path: '/',
        }
      ]
    },
  ];


  const modalConfig: ModalFuncProps = {
    maskClosable: true,
    keyboard: true,
    width: 700,
    styles: { mask: { backdropFilter: 'blur(5px)' } },
    afterClose: () => {
      setInstance(null);
    },
    getContainer: () => document.getElementById('root') || document.body,
    modalRender: (_: React.ReactNode) => {
      return <ConfigProvider theme={ { token: { padding: 0, paddingLG: 0, lineWidth: 0 } } }>
        <Card
          className="pointer-events-auto shadow-2xl"
          classNames={ { body: 'overflow-hidden' } }
          title={
            <div className="flex items-center gap-2 py-2 px-6">
              <Icon icon="ant-design:search-outlined" className="text-xl text-gray-500"></Icon>
              <ConfigProvider theme={ { token: { lineWidth: 0, colorBgContainer: 'transparent' } } }>
                <Input autoFocus size={ 'large' } placeholder={ t('global.header.search.placeholder') }></Input>
              </ConfigProvider>
              <div tabIndex={ 0 } onClick={ ToggleModal } onKeyDown={ (e) => {
                e.key === 'Enter' ? ToggleModal() : null;
              } } className="border border-gray-200 dark:border-gray-600 rounded text-sm text-gray-500 p-1 shadow hover:shadow-md leading-3 cursor-pointer">Esc
              </div>
            </div>
          }>
          <div className="flex flex-col">
            {
              mockData.map((item, index) => {
                return (
                  <div key={ index }>
                    <List dataSource={ item.list }
                          header={
                            <Typography.Text className="!px-6" strong>菜单</Typography.Text>
                          }
                          renderItem={ (item) => (
                            <List.Item tabIndex={ 0 } className="focus:bg-sky-500 focus:text-white !px-6 group cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800">
                              <div className="flex-none w-6 h-6 flex items-center justify-center text-gray-500 border border-gray-400 rounded mr-2 group-focus:text-white group-focus:border-white">
                                <Icon icon="ant-design:table-outlined"></Icon>
                              </div>
                              <div className="flex-1">{ item.content }</div>
                              <div className="flex-none">
                                <Icon icon="ant-design:right-outlined"></Icon>
                              </div>
                            </List.Item>
                          ) }>
                    </List>
                  </div>
                );
              })
            }

          </div>
        </Card>
      </ConfigProvider>;
    }
  };

  return {
    ToggleModal,
    quickKey,
  };
};