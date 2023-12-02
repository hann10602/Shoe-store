import React, { Suspense, useEffect } from "react";

import { Redirect, Route } from "react-router-dom";

export interface RouteWithLayoutProps {
  component: React.FC<any>;
  layout: React.FC<any>;
  path?: string | string[];
  from?: string;
  to?: string;
  exact?: boolean;
  protect: boolean;
  isAdmin?: boolean;
  routePath?: string;
}

export const RouteWithLayout: React.FC<RouteWithLayoutProps> = (props) => {
  const {
    layout: Layout,
    component: Component,
    protect,
    isAdmin,
    ...rest
  } = props;

  const token = localStorage.getItem('jwt');

  if (protect && !token) {
    return <Redirect to="/sign-in" />;
  }

  // if (isAdmin && (!loginUser || loginUser.role !== "ROLE_ADMIN")) {
  //   return <Redirect to="/home" />;
  // }

  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <Layout>
            <Suspense fallback={<></>}>
              <Component {...matchProps} />
            </Suspense>
          </Layout>
        );
      }}
    />
  );
};
