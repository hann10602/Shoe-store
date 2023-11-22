import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";

import { RouteWithLayout } from "@/components/RouteWithLayout";

import "antd/dist/antd.less";
import "./App.scss";
import "./i18n";
import { routes } from "./routes";
import { AppProvider } from "./context";

export default function App() {
  const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");

  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(RequestUserProfile());
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [jwt]);

  return (
    <>
      <AppProvider>
        <Switch>
          {routes.map(
            ({ Component, Layout, Protected, isAdmin, routePath, exact, path }, key) => {
              return (
                <RouteWithLayout
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  component={Component}
                  exact={exact}
                  layout={Layout}
                  path={path}
                  routePath={routePath}
                  protect={Protected}
                  isAdmin={isAdmin}
                />
              );
            }
          )}
        </Switch>
        {/* <DialogError /> */}
      </AppProvider>
    </>
  );
}
