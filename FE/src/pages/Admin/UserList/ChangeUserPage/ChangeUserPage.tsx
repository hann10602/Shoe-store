import { useAppDispatch } from "@/store/store";
import { userAsyncAction } from "@/store/user/action";
import { UserType } from "@/store/user/type";
import { validateEmail } from "@/utils";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type Props = {
  user?: UserType;
  successNotify: () => void;
  failedNotify: () => void;
  handleCancel: () => void;
};

const ChangeUserPage = ({
  user,
  successNotify,
  failedNotify,
  handleCancel,
}: Props) => {
  const cloud_name = "dcb5n0grf";
  const preset_key = "baswycwi";

  const openFileRef = useRef<HTMLInputElement>(null);

  const [avatar, setAvatar] = useState<string>("");
  const form = useForm();

  const history = useHistory();

  const { register, formState, handleSubmit } = form;

  const { errors } = formState;

  const dispatch = useAppDispatch();

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
      .then((imgUri) => {
        setAvatar(imgUri as string);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e: any) => {
    const file = openFileRef.current?.files?.[0];

    handleCancel();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", preset_key);

      if (user) {
        axios
          .post(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            formData
          )
          .then((res) => {
            dispatch(
              userAsyncAction.update({
                id: user.id,
                fullName: e.fullName,
                username: e.username,
                password: e.password,
                avatar: res.data.secure_url,
                email: e.email,
                phoneNum: e.phoneNum,
                address: e.address,
                role: e.role,
              })
            )
              .then(() => {
                successNotify();
                setAvatar("");
              })
              .catch(() => {
                failedNotify();
                setAvatar("");
              });
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .post(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            formData
          )
          .then((res) => {
            dispatch(
              userAsyncAction.create({
                fullName: e.fullName,
                username: e.username,
                password: e.password,
                avatar: res.data.secure_url,
                email: e.email,
                phoneNum: e.phoneNum,
                address: e.address,
                role: e.role,
              })
            )
              .then(() => {
                setAvatar("");
                successNotify();
              })
              .catch(() => {
                setAvatar("");
                failedNotify();
              });
          })
          .catch((err) => console.log(err));
      }
    } else {
      if (user) {
        dispatch(
          userAsyncAction.update({
            id: user.id,
            fullName: e.fullName,
            username: e.username,
            password: e.password,
            avatar: user.avatar,
            email: e.email,
            phoneNum: e.phoneNum,
            address: e.address,
            role: e.role,
          })
        )
          .then(() => {
            setAvatar("");
            successNotify();
          })
          .catch(() => {
            setAvatar("");
            failedNotify();
          });
      } else {
        dispatch(
          userAsyncAction.create({
            fullName: e.fullName,
            username: e.username,
            password: e.password,
            email: e.email,
            phoneNum: e.phoneNum,
            address: e.address,
            role: e.role,
          })
        )
          .then(() => {
            setAvatar("");
            successNotify();
          })
          .catch(() => {
            setAvatar("");
            failedNotify();
          });
      }
    }
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 z-20 flex items-center justify-center">
      <div className="w-full h-full relative">
        <div className="w-full h-full bg-black opacity-20"></div>
        <div className="w-[1000px] bg-white rounded-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-4 pb-10">
          <div className="flex justify-end">
            <span
              className="text-2xl font-bold rounded-full hover:bg-gray-200 p-4 cursor-pointer mb-5"
              onClick={() => handleCancel()}
            >
              <svg
                height={12}
                viewBox="0 0 329.26933 329"
                width={12}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
              </svg>
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between space-x-5">
              <div className="w-4/5">
                <div className="form-control relative">
                  <label
                    className="block mb-2 text-lg font-semibold"
                    htmlFor=""
                  >
                    Full name
                  </label>
                  <input
                    className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                    type="text"
                    defaultValue={user?.fullName}
                    {...register("fullName", {
                      required: "Please enter full name",
                    })}
                  />
                  <p className="font-semibold bottom-2 absolute text-red-500">
                    {errors.fullName?.message?.toString()}
                  </p>
                </div>
                <div className="form-control relative">
                  <label
                    className="block mb-2 text-lg font-semibold"
                    htmlFor=""
                  >
                    Username
                  </label>
                  <input
                    className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                    type="text"
                    defaultValue={user?.username}
                    {...register("username", {
                      required: "Please enter username",
                    })}
                  />
                  <p className="font-semibold bottom-2 absolute text-red-500">
                    {errors.username?.message?.toString()}
                  </p>
                </div>
                <div className="form-control relative">
                  <label
                    className="block mb-2 text-lg font-semibold"
                    htmlFor=""
                  >
                    Password
                  </label>
                  <input
                    className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                    type="text"
                    {...register("password", {})}
                  />
                  <p className="font-semibold bottom-2 absolute text-red-500">
                    {errors.password?.message?.toString()}
                  </p>
                </div>
                <div className="form-control relative">
                  <label
                    className="block mb-2 text-lg font-semibold"
                    htmlFor=""
                  >
                    Avatar
                  </label>
                  <div className="flex justify-center items-center">
                    {user?.avatar || avatar ? (
                      <img
                        className="w-32 h-32 object-cover cursor-pointer"
                        src={avatar || user?.avatar}
                        alt="avatar"
                        onClick={() => openFileRef.current?.click()}
                      />
                    ) : (
                      <div
                        className="w-32 h-32 flex justify-center items-center border-dashed border-2 border-blue-300 cursor-pointer"
                        onClick={() => openFileRef.current?.click()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_2"
                          data-name="Layer 2"
                          fill="rgb(147, 197, 253)"
                          width={80}
                          height={80}
                          viewBox="0 0 24 24"
                        >
                          <path d="M22,13a1,1,0,0,0-1,1v4.213A2.79,2.79,0,0,1,18.213,21H5.787A2.79,2.79,0,0,1,3,18.213V14a1,1,0,0,0-2,0v4.213A4.792,4.792,0,0,0,5.787,23H18.213A4.792,4.792,0,0,0,23,18.213V14A1,1,0,0,0,22,13Z" />
                          <path d="M6.707,8.707,11,4.414V17a1,1,0,0,0,2,0V4.414l4.293,4.293a1,1,0,0,0,1.414-1.414l-6-6a1,1,0,0,0-1.414,0l-6,6A1,1,0,0,0,6.707,8.707Z" />
                        </svg>
                      </div>
                    )}

                    <input
                      type="file"
                      className="hidden"
                      {...register("avatar", {
                        onChange: (e) => {
                          uploadImage(e.target.files?.[0]);
                        },
                      })}
                      ref={openFileRef}
                    />
                  </div>
                </div>
              </div>
              <div className="w-4/5">
                <div className="form-control relative">
                  <label
                    className="block mb-2 text-lg font-semibold"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                    type="text"
                    defaultValue={user?.email}
                    {...register("email", {
                      required: "Please enter email",
                      validate: {
                        isEmail: (fieldValue) =>
                          validateEmail(fieldValue) || "Wrong email format",
                      },
                    })}
                  />
                  <p className="font-semibold bottom-2 absolute text-red-500">
                    {errors.email?.message?.toString()}
                  </p>
                </div>
                <div className="form-control relative">
                  <label
                    className="block mb-2 text-lg font-semibold"
                    htmlFor=""
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                    type="number"
                    defaultValue={user?.phoneNum}
                    {...register("phoneNum", {
                      required: "Please enter phone number",
                      validate: {
                        isPhoneNum: (fieldValue) =>
                          (8 <= fieldValue.length && fieldValue.length <= 12) ||
                          "Phone number 8 to 12 characters",
                      },
                    })}
                  />
                  <p className="font-semibold bottom-2 absolute text-red-500">
                    {errors.phoneNum?.message?.toString()}
                  </p>
                </div>
                <div className="form-control relative">
                  <label
                    className="block mb-2 text-lg font-semibold"
                    htmlFor=""
                  >
                    Address
                  </label>
                  <input
                    className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                    type="text"
                    defaultValue={user?.address}
                    {...register("address", {})}
                  />
                  <p className="font-semibold bottom-2 absolute text-red-500">
                    {errors.address?.message?.toString()}
                  </p>
                </div>
                <div className="form-control relative">
                  <label
                    className="block mb-2 text-lg font-semibold"
                    htmlFor=""
                  >
                    Role
                  </label>
                  <select
                    defaultValue={user ? user.role : "ROLE_USER"}
                    className="mb-6 w-40 h-10 border border-solid border-gray-300 text-lg rounded-md"
                    {...register("role", {
                      required: "Please enter role",
                    })}
                  >
                    <option value="ROLE_USER">User</option>
                    <option value="ROLE_ADMIN">Admin</option>
                  </select>
                  <p className="font-semibold bottom-2 absolute text-red-500">
                    {errors.role?.message?.toString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-5">
              <button
                className="w-[45%] h-12 border border-solid border-gray-300 rounded-xl font-semibold hover:bg-gray-400"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
              <button
                className="w-[45%] h-12 border border-solid border-gray-300 bg-gray-300 rounded-xl font-semibold hover:bg-gray-400"
                type="submit"
              >
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeUserPage;
