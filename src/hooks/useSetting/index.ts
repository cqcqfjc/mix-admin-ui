import { useContext } from 'react';
import { AdminContext } from '@/contexts';

export const useSettings = () => {
  const { setting } = useContext(AdminContext);

  return setting;
};