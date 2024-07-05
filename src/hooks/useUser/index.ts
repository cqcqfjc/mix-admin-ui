import { useState } from 'react';
import { UserInfo } from '@/types';

export const useUser = () => {
  const [user] = useState<UserInfo>({
    id: 0,
    name: 'Administrator',
    username: 'admin',
    phone: '18000000000',
    avatar: '/mix-logo.svg',
    department: '部门',
    roles: [],
    status: '正常',
    recently_active: '2024-06-01 12:00:00',
    created_at: '2024-06-01 12:00:00',
  });


  return {
    user
  };
};