import React from 'react';

export interface MixLogoProps {
  appLogo?: string;
  appName?: string;
  showTitle?: boolean;
  mode?: 'horizontal' | 'vertical';
}

export const Logo: React.FC<MixLogoProps> = ({ appLogo, appName, showTitle, mode }) => {
  const className = mode === 'vertical' ? 'flex-col justify-center' : showTitle ? 'w-20 xl:w-56' : 'w-20';
  return (
    <div className={ `pl-4 flex items-center gap-3 cursor-pointer select-none ${ className }` }>
      <img className="flex-none w-10 h-10" src={ appLogo } alt="Mix Admin Logo"/>
      { showTitle ? <span className="flex-auto text-base hidden xl:block">{ appName }</span> : null }
    </div>
  );
};
