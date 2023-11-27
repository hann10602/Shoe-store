import { useAppDispatch } from "@/store/store";
import { userAsyncAction } from "@/store/user/action";
import { isChangingPasswordUserSelector } from "@/store/user/selector";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./style.scss";

type Props = { userId: number };

const ChangePassword = ({ userId }: Props) => {
  const history = useHistory();
  const location = useLocation();
  const form = useForm();

  const { register, formState, handleSubmit, watch } = form;
  const { errors } = formState;

  const newPassword = watch("newPassword");
  const message = new URLSearchParams(location.search).get("message");

  const isChangingPassword = useSelector(isChangingPasswordUserSelector);

  const dispatch = useAppDispatch();

  const handleChangePassword = (e: FieldValues) => {
    dispatch(
      userAsyncAction.changePassword({
        id: userId,
        oldPassword: e.oldPassword,
        newPassword: e.newPassword,
      })
    )
      .then(() => history.push(`/user?page=change-password&message=Changed success`))
      .catch((err) =>
        history.push(`/user?page=change-password&message=Wrong password`)
      );
  };

  return (
    <>
      {message && (
        <div
          id={`${message === "success" ? "changing-success" : "changing-fail"}`}
        >
          {message === "success" ? "Success" : "Error"}
        </div>
      )}
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
