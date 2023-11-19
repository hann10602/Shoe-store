import { LoginUserType } from "@/store/auth/type";
import { useAppDispatch } from "@/store/store";
import { userAsyncAction } from "@/store/user/action";
import React, { useState } from "react";
import "./style.scss";
import { FieldValues, useForm } from "react-hook-form";
import { validateEmail } from "@/utils";

type Props = {
  user: LoginUserType;
};

const UserInformation = ({ user }: Props) => {
  const [isUpdateUser, setIsUpdateUser] = useState<boolean>(false);

  const form = useForm();
  const dispatch = useAppDispatch();

  const { register, formState, handleSubmit } = form;

  const { errors } = formState;

  const handleUserUpdate = (e: FieldValues) => {
    if (user !== undefined) {
      dispatch(
        userAsyncAction.update({
          id: e.id,
          fullName: e.fullName,
          username: e.username,
          email: e.email,
          phoneNum: e.phoneNum,
          address: e.address,
        })
      );

      setIsUpdateUser(false);
    }
  };

  return (
    <div id="user-information">
      <p id="information-title">User information</p>
      <form id="information-main" onSubmit={handleSubmit(handleUserUpdate)}>
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
              <p className="error-field">
                {errors.fullName?.message?.toString()}
              </p>
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
              <p className="error-field">
                {errors.username?.message?.toString()}
              </p>
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
                  validate: {
                    isSimilar: (fieldValue) =>
                      validateEmail(fieldValue) || "Wrong email format",
                  },
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
                  minLength: 10,
                  maxLength: 15,
                })}
                defaultValue={user?.phoneNum}
              />
              <p className="error-field">
                {errors.phoneNum?.message?.toString()}
              </p>
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
              <p className="error-field">
                {errors.address?.message?.toString()}
              </p>
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
  );
};

export default UserInformation;
