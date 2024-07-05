import React from 'react';
import { AccessTokenKey, RefreshTokenKey } from '@/consts.ts';

export const Login: React.FC = () => {
  localStorage.setItem(AccessTokenKey, '123');
  localStorage.setItem(RefreshTokenKey, '456');
  return (
    <div>
      Login
    </div>
  );
};