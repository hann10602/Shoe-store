import React, { useEffect } from "react";

import { Switch } from "react-router-dom";

import { RouteWithLayout } from "@/components/RouteWithLayout";

import "antd/dist/antd.less";
import "./App.scss";
import { AppProvider } from "./context";
import "./i18n";
import { routes } from "./routes";
import { JWTType } from "./store/auth/type";
import { useAppDispatch } from "./store/store";
import { userAsyncAction } from "./store/user/action";

export default function App() {
  const dispatch = useAppDispatch();
  const tokenForm: string | null = localStorage.getItem("jwt");
  const jwt: JWTType = tokenForm != null ? JSON.parse(tokenForm) : null;

  useEffect(() => {
    console.log(tokenForm)
    if (tokenForm) {
      dispatch(userAsyncAction.getOne({id: Number(jwt.id)}));
    }
  }, [tokenForm]);

  return (
    <>
      <AppProvider>
        <Switch>
          {routes.map(
            (
              { Component, Layout, Protected, isAdmin, routePath, exact, path },
              key
            ) => {
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
