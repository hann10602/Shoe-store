import { LoginUserType } from "@/store/auth/type";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import UserInformation from "./UserInformation";
import "./style.scss";
import { getCurrentLoginUser } from "@/utils";
import CartList from "./CartList";
import OrderList from "./OrderList";

type Props = {};

const UserDetail = (props: Props) => {
  const history = useHistory();

  const [user, setUser] = useState<LoginUserType | undefined>(undefined);
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page");

  useLayoutEffect(() => {
    const loginUser = getCurrentLoginUser();

    setUser(loginUser);
  }, []);

  return (
    <>
      <div className="header-space"></div>
      <div id="user">
        <div id="user-side-bar">
          <div id="user-side-header">
            <p className="title">USER ACCOUNT</p>
            <p id="user-title">
              Hello,{" "}
              <span style={{ color: "rgb(255, 65, 51)" }}>
                {user?.fullName}
              </span>
            </p>
          </div>
          <div id="user-side-nav">
            <p
              className={`${page === null ? "page-chosen" : ""} page-nav`}
              onClick={() => history.push("/user")}
            >
              User information
            </p>
            <p
              className={`${page === "orders" ? "page-chosen" : ""} page-nav`}
              onClick={() => history.push("/user?page=orders")}
            >
              Orders
            </p>
            <p
              className={`${page === "carts" ? "page-chosen" : ""} page-nav`}
              onClick={() => history.push("/user?page=carts")}
            >
              Carts
            </p>
            <p
              className={`${
                page === "change-password" ? "page-chosen" : ""
              } page-nav`}
              onClick={() => history.push("/user?page=change-password")}
            >
              Change password
            </p>
          </div>
          <div id="user-side-footer">
            <div
              id="logout"
              onClick={() => {
                localStorage.removeItem("login-user");
                window.location.reload();
              }}
            >
              Logout
            </div>
          </div>
        </div>
        <div id="user-main">
          {page === null && user !== undefined && (
            <UserInformation user={user} />
          )}
          {page === "carts" && user !== undefined && (
            <CartList userId={user.id} />
          )}
          {page === "change-password" && user !== undefined && (
            <ChangePassword userId={user.id} />
          )}
          {page === "orders" && user !== undefined && (
            <OrderList userId={user.id} />
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetail;
