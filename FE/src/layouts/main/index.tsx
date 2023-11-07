import React from 'react';

import { LayoutMain } from '@/components';

interface IPropsLayoutMain {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IPropsLayoutMain> = ({ children }) => {
  return <LayoutMain>{children}</LayoutMain>;
};
