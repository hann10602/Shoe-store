import React from "react";

import { MainLayout, LoginLayout } from "../layouts";
import Register from "@/pages/Auth/Register";
import ProductDetail from "@/pages/Home/ProductDetail";
import SearchPage from "@/pages/Home/SearchPage";
import UserDetail from "@/pages/Home/UserDetail";
import About from "@/pages/Home/About";
import Policy from "@/pages/Home/Policy";
import AdminLayout from "@/layouts/admin";
import AdminHome from "@/pages/Admin/AdminHome";
import UserList from "@/pages/Admin/UserList";
import ProductList from "@/pages/Admin/ProductList";

const Login = React.lazy(() => import("@/pages/Auth/Login"));
const Home = React.lazy(() => import("@/pages/Home/HomePage"));
export interface IRoute {
  Component: ((props: any) => JSX.Element) | React.FC<any>;
  Layout: ((props: any) => JSX.Element) | React.FC<any>;
  Protected: boolean;
  isAdmin?: boolean;
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
    path: "/sign-in",
    routePath: "/sign-in",
    Protected: false,
  },
  {
    Component: Register,
    Layout: LoginLayout,
    exact: true,
    path: "/register",
    routePath: "/register",
    Protected: false,
  },
  {
    Component: Home,
    Layout: MainLayout,
    exact: true,
    path: ["/home"],
    routePath: "/home",
    Protected: false,
  },
  {
    Component: ProductDetail,
    Layout: MainLayout,
    exact: true,
    path: "/shoe",
    routePath: "/shoe",
    Protected: false,
  },
  {
    Component: UserDetail,
    Layout: MainLayout,
    exact: true,
    path: "/user",
    routePath: "/user",
    Protected: true,
  },
  {
    Component: SearchPage,
    Layout: MainLayout,
    exact: true,
    path: "/search",
    routePath: "/search",
    Protected: false,
  },
  {
    Component: About,
    Layout: MainLayout,
    exact: true,
    path: "/about",
    routePath: "/about",
    Protected: false,
  },
  {
    Component: Policy,
    Layout: MainLayout,
    exact: true,
    path: "/policy",
    routePath: "/policy",
    Protected: false,
  },
  {
    Component: AdminHome,
    Layout: AdminLayout,
    exact: true,
    path: "/admin",
    routePath: "/admin",
    Protected: true,
    isAdmin: true
  },
  {
    Component: UserList,
    Layout: AdminLayout,
    exact: true,
    path: "/admin?tab=user",
    routePath: "/admin?tab=user",
    Protected: true,
    isAdmin: true
  },
  {
    Component: ProductList,
    Layout: AdminLayout,
    exact: true,
    path: "/admin?tab=shoe",
    routePath: "/admin?tab=shoe",
    Protected: true,
    isAdmin: true
  },
  {
    Component: AdminHome,
    Layout: AdminLayout,
    exact: true,
    path: "/admin",
    routePath: "/admin",
    Protected: true,
    isAdmin: true
  }
];
