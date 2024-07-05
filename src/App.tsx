import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App as AntdApp } from 'antd';
import { Admin, Authenticated, Login, MixLayout } from '@/components';
import { defaultApi } from '@/contexts';
import i18n from '@/locales';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AntdApp>
        <Admin apiProvider={ defaultApi() } i18n={ i18n }>
          <Routes>
            <Route path="/login" element={ <Login/> }></Route>
            <Route path="/*" element={ <Authenticated><MixLayout/></Authenticated> }></Route>
          </Routes>
        </Admin>
      </AntdApp>
    </BrowserRouter>
  );
};

export default App;
