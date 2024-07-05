import { useState } from 'react';

export const useMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  return {
    collapsed,
    setCollapsed
  };
};