import { useAppDispatch } from "@/store/store";
import { userAsyncAction } from "@/store/user/action";
import { isChangingPasswordUserSelector } from "@/store/user/selector";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./style.scss";
import { getToken } from "@/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const ChangePassword = (props: Props) => {
  const history = useHistory();
  const location = useLocation();
  const form = useForm();

  const { register, formState, handleSubmit, watch } = form;
  const { errors } = formState;

  const token = getToken();

  const newPassword = watch("newPassword");

  const isChangingPassword = useSelector(isChangingPasswordUserSelector);

  const dispatch = useAppDispatch();

  const successNotify = () => {
    toast.success("Success");
    dispatch(userAsyncAction.getOne({ id: token.id }));
  };

  const failedNotify = () => {
    toast.error("Failed");
  };

  const handleChangePassword = (e: FieldValues) => {
    dispatch(
      userAsyncAction.changePassword({
        id: token.id,
        oldPassword: e.oldPassword,
        newPassword: e.newPassword,
      })
    )
      .then(() => successNotify())
      .catch((err) => failedNotify());
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div id="change-password">
        <p className="title">Change password</p>
        <form action="" onSubmit={handleSubmit(handleChangePassword)}>
          <div className="form-control">
            <label htmlFor="oldPassword">Old password</label>
            <input
              type="password"
              {...register("oldPassword", {
                required: "Please enter the password",
              })}
            />
            <p className="field-message">
              {errors.oldPassword?.message?.toString()}
            </p>
          </div>

          <div className="form-control">
            <label htmlFor="newPassword">New password</label>
            <input
              type="password"
              {...register("newPassword", {
                required: "New password is required",
                validate: {
                  moreThan8Char: (fieldValue) => {
                    return fieldValue.length >= 8 || "At least 8 character";
                  },
                },
              })}
            />
            <p className="field-message">
              {errors.newPassword?.message?.toString()}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="confirmNewPassword">Confirm new password</label>
            <input
              type="password"
              {...register("confirmNewPassword", {
                validate: {
                  isSimilar: (fieldValue) =>
                    fieldValue === newPassword || "Password not correct",
                },
              })}
            />
            <p className="field-message">
              {errors.confirmNewPassword?.message?.toString()}
            </p>
          </div>

          <div className="btn-wrapper">
            <button
              className="submit-btn"
              disabled={isChangingPassword}
              type="submit"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
