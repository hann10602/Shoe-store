import { getCurrentLoginUser } from "@/utils";
import React, { Suspense } from "react";

import { Redirect, Route } from "react-router-dom";

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

  const loginUser = getCurrentLoginUser();

  if (protect && !loginUser) {
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
