import React from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';
import {
  FullScreenBtn,
  GithubBtn,
  Logo,
  MessagePanel,
  PageReloadBtn,
  PersonalAvatar,
  SearchBtn,
  SideCollapseBtn,
  SwitchLangBtn,
  SwitchThemeBtn
} from '@/components';
import { useMenu, useSettings } from '@/hooks';
import { useNavigate } from 'react-router-dom';

export const MixLayout: React.FC = () => {
  const {
    appLogo,
    appName,
    enableSideCollapseBtn,
    enablePageReloadBtn,
    enableGlobalSearch,
    enableGithubBtn,
    enableMessage,
    enableFullScreen,
    enableSwitchThemeBtn,
    enableSwitchLangBtn
  } = useSettings();
  const navigate = useNavigate();
  useMenu();
  return (
    <Layout className="w-full h-screen">
      <Layout.Header className="fixed z-top top-0 w-full backdrop-blur flex items-center gap-1">
        <ConfigProvider theme={ {
          components: {
            Button: {
              colorText: 'rgba(255, 255, 255, 0.65)',
              textHoverBg: 'rgb(20 40 68 / 0.4)',
            }
          }
        } }>
          <Logo appLogo={ appLogo } appName={ appName } showTitle={ true }></Logo>
          { enableSideCollapseBtn ? <SideCollapseBtn/> : null }
          { enablePageReloadBtn ? <PageReloadBtn/> : null }

          <Menu className="flex-auto !leading-10 gap-2" mode="horizontal" theme="dark" items={ [] } selectedKeys={ [] } onClick={ (info) => navigate(info.key) } style={ { backgroundColor: 'transparent' } }/>

          <div className="ml-2 flex items-center text-white gap-1">
            { enableGlobalSearch ? <SearchBtn/> : null }
            { enableGithubBtn ? <GithubBtn/> : null }
            { enableMessage ? <MessagePanel/> : null }
            { enableFullScreen ? <FullScreenBtn/> : null }
            { enableSwitchThemeBtn ? <SwitchThemeBtn/> : null }
            { enableSwitchLangBtn ? <SwitchLangBtn/> : null }
            <PersonalAvatar/>
          </div>
        </ConfigProvider>
      </Layout.Header>
      <Layout className="w-full h-screen">
        <Layout.Sider className="p-2 pt-16 overflow-y-scroll scrollbar" width={ 224 } theme="light"></Layout.Sider>
        <Layout.Content className="pt-16 overflow-y-scroll overscroll-contain translate-y-0 scrollbar">
          <div className={ 'h-[2048px]' }></div>
        </Layout.Content>
      </Layout>
    </Layout>
  );

  // return (
  //   <div className="w-full h-screen relative">
  //     <div className="w-full h-16 fixed z-50 bg-blue-700"></div>
  //     <div className="w-full h-screen flex pt-16">
  //       <div className="flex-none w-56 h-full bg-green-300"></div>
  //       <div className="flex-auto h-full overflow-scroll flex flex-col">
  //         <div className='flex-none h-[2048px] w-56 bg-red-500'></div>
  //         <div className='flex-none h-[2048px] w-56 bg-red-500'></div>
  //       </div>
  //     </div>
  //   </div>
  // );
};