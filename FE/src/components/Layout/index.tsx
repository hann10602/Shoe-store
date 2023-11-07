import React from 'react';

import { Layout } from 'antd';

interface IPropsLayoutMain {
  children: React.ReactNode;
}

export const LayoutMain: React.FC<IPropsLayoutMain> = ({ children }) => {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header>
         Header layout
      </Header>
      <Layout>
       
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
