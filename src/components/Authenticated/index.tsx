import React, { PropsWithChildren, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ApiContext } from '@/contexts';
import { useRequest } from 'ahooks';
import { ErrorScene, LoadingScene } from '@/components';

export const Authenticated: React.FC<PropsWithChildren> = ({ children }) => {
  const { checkLogin } = useContext(ApiContext);
  const location = useLocation();
  const isLogin = checkLogin();

  if (!isLogin && location.pathname !== '/login') {
    return <Navigate to="/login" state={ { from: location } } replace/>;
  }

  const init = async () => {
  };

  const { loading, error } = useRequest(init);

  if (loading) {
    return <LoadingScene/>;
  }

  if (error) {
    return <ErrorScene error={ error }/>;
  }

  return children;
};