import GeneralAvatar from "@/assets/img/web/avatar.jpg";
import { useAppDispatch } from "@/store/store";
import { userAsyncAction } from "@/store/user/action";
import { userSelector } from "@/store/user/selector";
import { getToken, validateEmail } from "@/utils";
import axios from "axios";
import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";
import { useHistory } from "react-router-dom";

type Props = {};

const UserInformation = (props: Props) => {
  const cloud_name = "dcb5n0grf";
  const preset_key = "baswycwi";

  const [isUpdateUser, setIsUpdateUser] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>("");

  const openFileRef = useRef<HTMLInputElement>(null);

  const form = useForm();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const loginUser = useSelector(userSelector);

  const token = getToken();

  const { register, formState, handleSubmit, reset } = form;

  const { errors } = formState;

  const uploadImage = (file: File) => {
    if (!file) {
      return;
    }
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target?.result);
      };
      reader.readAsDataURL(file);
    })
      .then((imgUri) => setAvatar(imgUri as string))
      .catch((err) => console.log(err));
  };

  const successNotify = () => {
    toast.success("Success");
  };

  const failedNotify = () => {
    toast.error("Failed");
  };

  const handleUserUpdate = (e: FieldValues) => {
    if (loginUser !== undefined) {
      const file = openFileRef.current?.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset_key);
        axios
          .post(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            formData
          )
          .then((res) => {
            dispatch(
              userAsyncAction.update({
                id: loginUser.id,
                fullName: e.fullName,
                username: e.username,
                avatar: res.data.secure_url,
                email: e.email,
                phoneNum: e.phoneNum,
                role: loginUser.role,
                address: e.address,
              })
            )
              .then(() => {
                dispatch(userAsyncAction.getOne({ id: token.id }));
                successNotify();
              })
              .catch((err) => {
                if (err.message === "ERR_NETWORK") {
                  history.push("/sign-in");
                } else {
                  failedNotify();
                }
              });

            setIsUpdateUser(false);
            setAvatar("");
          })
          .catch((err) => console.log(err));
      } else {
        dispatch(
          userAsyncAction.update({
            id: loginUser.id,
            fullName: e.fullName,
            username: e.username,
            avatar: loginUser.avatar,
            email: e.email,
            phoneNum: e.phoneNum,
            role: loginUser.role,
            address: e.address,
          })
        )
          .then(() => {
            dispatch(userAsyncAction.getOne({ id: token.id }));
            successNotify();
          })
          .catch((err) => {
            if (err.message === "ERR_NETWORK") {
              history.push("/sign-in");
            } else {
              failedNotify();
            }
          });

        setIsUpdateUser(false);
        setAvatar("");
      }
    }
  };

  return (
    <div id="user-information">
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
      <p id="information-title">User information</p>
      <form id="information-main" onSubmit={handleSubmit(handleUserUpdate)}>
        <div className="field-wrapper">
          <div id="avatar-wrapper">
            {isUpdateUser ? (
              <div style={{height: "100%"}} onClick={() => openFileRef.current?.click()}>
                {loginUser?.avatar ? (
                  <img
                    className="avatar"
                    src={avatar || loginUser?.avatar}
                    alt="avatar"
                  />
                ) : (
                  <img
                    className="avatar"
                    src={avatar || GeneralAvatar}
                    alt="avatar"
                  />
                )}
                <input
                  type="file"
                  style={{ display: "none" }}
                  {...register("avatar", {
                    onChange: (e) => {
                      uploadImage(e.target.files?.[0]);
                    },
                  })}
                  ref={openFileRef}
                />
                <span
                  id="avatar-change"
                >
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
              </div>
            ) : (
              <>
                {loginUser?.avatar ? (
                  <img
                    className="avatar"
                    src={loginUser?.avatar}
                    alt="avatar"
                  />
                ) : (
                  <img className="avatar" src={GeneralAvatar} alt="avatar" />
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
                defaultValue={loginUser?.fullName}
              />
              <p className="error-field">
                {errors.fullName?.message?.toString()}
              </p>
            </>
          ) : (
            <p>{loginUser?.fullName}</p>
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
                defaultValue={loginUser?.username}
              />
              <p className="error-field">
                {errors.username?.message?.toString()}
              </p>
            </>
          ) : (
            <p>{loginUser?.username}</p>
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
                defaultValue={loginUser?.email}
              />
              <p className="error-field">{errors.email?.message?.toString()}</p>
            </>
          ) : (
            <p>{loginUser?.email}</p>
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
                  validate: {
                    isPhoneNum: (fieldValue) =>
                      (8 < fieldValue.length && fieldValue.length < 12) ||
                      "Phone number 8 to 12 characters",
                  },
                })}
                defaultValue={loginUser?.phoneNum}
              />
              <p className="error-field">
                {errors.phoneNum?.message?.toString()}
              </p>
            </>
          ) : (
            <p>{loginUser?.phoneNum}</p>
          )}
        </div>
        <div className="field-wrapper">
          <b>Address: </b>
          {isUpdateUser ? (
            <>
              <input
                type="text"
                {...register("address", {})}
                defaultValue={loginUser?.address}
              />
              <p className="error-field">
                {errors.address?.message?.toString()}
              </p>
            </>
          ) : (
            <p>{loginUser?.address}</p>
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
                onClick={() => {
                  reset();
                  setAvatar("");
                  setIsUpdateUser(false);
                }}
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
