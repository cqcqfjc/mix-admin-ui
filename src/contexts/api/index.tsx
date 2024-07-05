import React, { PropsWithChildren } from 'react';
import { IApiContext } from '@/types';

export const ApiContext = React.createContext<IApiContext>({} as IApiContext);


type Props = PropsWithChildren<{ apiProvider: IApiContext }>

export const ApiContextProvider: React.FC<Props> = ({ children, apiProvider }) => {
  return (
    <ApiContext.Provider value={ apiProvider }>
      { children }
    </ApiContext.Provider>
  );
};
