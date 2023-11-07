import React, { Suspense } from "react";

import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { IsLoggedIn } from "@/store/auth/selector";
export interface RouteWithLayoutProps {
  component: React.FC<any>;
  layout: React.FC<any>;
  path?: string | string[];
  from?: string;
  to?: string;
  exact?: boolean;
  protect: boolean;
  routePath?: string;
}

export const RouteWithLayout: React.FC<RouteWithLayoutProps> = (props) => {
  const { layout: Layout, component: Component, protect, ...rest } = props;
  const loggedIn = useSelector(IsLoggedIn);

  if (protect && !loggedIn) {
    return <Redirect to="/sign-in" />;
  }

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
