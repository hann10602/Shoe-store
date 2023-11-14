import { LoginUserType } from "@/store/auth/type";
import "./style.scss";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "@/store/store";
import { authAsyncAction } from "@/store/auth/action";
import { userAsyncAction } from "@/store/user/action";

type Props = {};

const UserDetail = (props: Props) => {
  const [isUpdateUser, setIsUpdateUser] = useState<boolean>(false);
  const [user, setUser] = useState<LoginUserType | undefined>(undefined);

  const form = useForm();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const { register, formState, handleSubmit } = form;

  const { errors } = formState;

  const page = new URLSearchParams(location.search).get("page");

  const handleUserUpdate = (e: FieldValues) => {
    if (user !== undefined) {
      dispatch(
        userAsyncAction.update({
          id: user.id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          phoneNum: user.phoneNum,
          address: user.address,
        })
      );

      setIsUpdateUser(false);
    }
  };

  useEffect(() => {
    const userInformation: string | null = localStorage.getItem("login-user");
    const loginUser: LoginUserType =
      userInformation != null ? JSON.parse(userInformation) : null;

    setUser(loginUser);
  }, [dispatch]);

  return (
    <>
      <div className="header-space"></div>
      <div id="user">
        <div id="user-side-bar">
          <div id="user-side-header">
            <p className="title">USER ACCOUNT</p>
            <p id="user-title">
              Hello,{" "}
              <span style={{ color: "rgb(255, 65, 51)" }}>{user?.fullName}</span>
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
              className={`${
                page === "change-password" ? "page-chosen" : ""
              } page-nav`}
              onClick={() => history.push("/user?page=change-password")}
            >
              Change password
            </p>
          </div>
          <div id="user-side-footer">
            <div id="logout">Logout</div>
          </div>
        </div>
        <div id="user-main">
          {page === null && (
            <div id="user-information">
              <p id="information-title">User information</p>
              <form
                id="information-main"
                onSubmit={handleSubmit(handleUserUpdate)}
              >
                <div className="field-wrapper">
                  <b>Full Name: </b>
                  {isUpdateUser ? (
                    <>
                      <input
                        type="text"
                        {...register("fullName", {
                          required: "Please enter full name",
                        })}
                        defaultValue={user?.fullName}
                      />
                      <p className="error-field">{errors.fullName?.message?.toString()}</p>
                    </>
                  ) : (
                    <p>{user?.fullName}</p>
                  )}
                </div>
                <div className="field-wrapper">
                  <b>Username: </b>
                  {isUpdateUser ? (
                    <>
                      <input
                        type="text"
                        {...register("username", {
                          required: "Please enter username",
                        })}
                        defaultValue={user?.username}
                      />
                      <p className="error-field">{errors.username?.message?.toString()}</p>
                    </>
                  ) : (
                    <p>{user?.username}</p>
                  )}
                </div>
                <div className="field-wrapper">
                  <b>Email: </b>
                  {isUpdateUser ? (
                    <>
                      <input
                        type="text"
                        {...register("email", {
                          required: "Please enter email",
                        })}
                        defaultValue={user?.email}
                      />
                      <p className="error-field">{errors.email?.message?.toString()}</p>
                    </>
                  ) : (
                    <p>{user?.email}</p>
                  )}
                </div>
                <div className="field-wrapper">
                  <b>Phone number: </b>
                  {isUpdateUser ? (
                    <>
                      <input
                        type="text"
                        {...register("phoneNum", {
                          required: "Please enter phone number",
                        })}
                        defaultValue={user?.phoneNum}
                      />
                      <p className="error-field">{errors.phoneNum?.message?.toString()}</p>
                    </>
                  ) : (
                    <p>{user?.phoneNum}</p>
                  )}
                </div>
                <div className="field-wrapper">
                  <b>Address: </b>
                  {isUpdateUser ? (
                    <>
                      <input
                        type="text"
                        {...register("address", {
                          required: "Please enter address",
                        })}
                        defaultValue={user?.address}
                      />
                      <p className="error-field">{errors.address?.message?.toString()}</p>
                    </>
                  ) : (
                    <p>{user?.address}</p>
                  )}
                </div>
                <div id="update-information">
                  {isUpdateUser ? (
                    <>
                      <button id="save-information-btn" type="submit">
                        Save
                      </button>
                      <div
                        id="cancel-information-btn"
                        onClick={() => setIsUpdateUser(false)}
                      >
                        Cancel
                      </div>
                    </>
                  ) : (
                    <div
                      id="update-information-btn"
                      onClick={() => setIsUpdateUser(true)}
                    >
                      Update
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}
          {page === "orders" && <div id="orders"></div>}
          {page === "change-password" && <div id="change-password"></div>}
        </div>
      </div>
    </>
  );
};

export default UserDetail;
