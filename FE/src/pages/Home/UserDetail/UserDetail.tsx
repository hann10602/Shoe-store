import { userSelector } from "@/store/user/selector";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import CartList from "./CartList";
import ChangePassword from "./ChangePassword";
import OrderList from "./OrderLIst";
import UserInformation from "./UserInformation";
import "./style.scss";
import { useAppDispatch } from "@/store/store";
import { logout } from "@/store/user/slice";

type Props = {};

const UserDetail = (props: Props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const location = useLocation();
  const loginUser = useSelector(userSelector);
  const page = new URLSearchParams(location.search).get("page");

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
                {loginUser?.fullName}
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
                localStorage.removeItem("jwt");
                history.push("/sign-in");
                dispatch(logout());
              }}
            >
              Logout
            </div>
          </div>
        </div>
        <div id="user-main">
          {page === null && loginUser !== undefined && <UserInformation />}
          {page === "carts" && loginUser !== undefined && <CartList />}
          {page === "change-password" && loginUser !== undefined && (
            <ChangePassword />
          )}
          {page === "orders" && loginUser !== undefined && <OrderList />}
        </div>
      </div>
    </>
  );
};

export default UserDetail;
