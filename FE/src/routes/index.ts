import React from 'react';

import { MainLayout, LoginLayout } from '../layouts';

const Login = React.lazy(() => import('@/pages/Auth/Login'));
const Home = React.lazy(() => import('@/pages/Home/Home'));
export interface IRoute {
  Component: ((props: any) => JSX.Element) | React.FC<any>;
  Layout: ((props: any) => JSX.Element) | React.FC<any>;
  Protected: boolean;
  path?: string | string[];
  routePath?: string;
  from?: string;
  to?: string;
  exact?: boolean;
}

export const routes: IRoute[] = [
  {
    Component: Login,
    Layout: LoginLayout,
    exact: true,
    path: '/sign-in',
    routePath: '/sign-in',
    Protected: false,
  },
  {
    Component: Home,
    Layout: MainLayout,
    exact: true,
    path: ['/'],
    routePath: '/',
    Protected: true,
  },
];
