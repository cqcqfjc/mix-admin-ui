import React from 'react';
import { useGlobalSearch } from '@/hooks/useGlobalSearch';
import { SearchOutlined } from '@ant-design/icons';

export const SearchBtn: React.FC = () => {
  const { ToggleModal, quickKey } = useGlobalSearch();

  return (
    <div onClick={ ToggleModal } className="w-10 lg:w-24 px-0 lg:px-4 h-10 text-base lg:text-sm bg-inherit  lg:bg-primary-dark/40 rounded-[4px] text-white/50  flex items-center justify-center cursor-pointer select-none">
      <span className="flex-1 h-10 leading-10 hidden lg:block">{ quickKey }</span>
      <SearchOutlined/>
    </div>
  );
};
