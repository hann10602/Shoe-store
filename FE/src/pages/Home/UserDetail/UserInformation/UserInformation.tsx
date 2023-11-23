import { LoginUserType } from "@/store/auth/type";
import Avatar from "@/assets/img/web/avatar.jpg";
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
          avatar: e.avatar,
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
          <div id="avatar-wrapper">
            {isUpdateUser ? (
              <>
                {user.avatar ? (
                  <img src={user.avatar} alt="avatar" />
                ) : (
                  <img id="avatar" src={Avatar} alt="avatar" />
                )}
                <span id="avatar-change" onClick={() => console}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={16}
                    height={16}
                    viewBox="0 0 36.174 36.174"
                  >
                      <path
                        d="M23.921,20.528c0,3.217-2.617,5.834-5.834,5.834s-5.833-2.617-5.833-5.834s2.616-5.834,5.833-5.834
		S23.921,17.312,23.921,20.528z M36.174,12.244v16.57c0,2.209-1.791,4-4,4H4c-2.209,0-4-1.791-4-4v-16.57c0-2.209,1.791-4,4-4h4.92
		V6.86c0-1.933,1.566-3.5,3.5-3.5h11.334c1.934,0,3.5,1.567,3.5,3.5v1.383h4.92C34.383,8.244,36.174,10.035,36.174,12.244z
		 M26.921,20.528c0-4.871-3.963-8.834-8.834-8.834c-4.87,0-8.833,3.963-8.833,8.834s3.963,8.834,8.833,8.834
		C22.958,29.362,26.921,25.399,26.921,20.528z"
                      />
                  </svg>
                </span>
              </>
            ) : (
              <>
                {user.avatar ? (
                  <img src={user.avatar} alt="avatar" />
                ) : (
                  <img id="avatar" src={Avatar} alt="avatar" />
                )}
              </>
            )}
          </div>
        </div>
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
