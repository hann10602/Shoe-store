import { useAppDispatch } from "@/store/store";
import { userAsyncAction } from "@/store/user/action";
import { UserType } from "@/store/user/type";
import { validateEmail } from "@/utils";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  user?: UserType;
  handleCancel: () => void;
};

const ChangeUserPage = ({ user, handleCancel }: Props) => {
  const form = useForm();

  const { register, formState, handleSubmit } = form;

  const { errors } = formState;

  const dispatch = useAppDispatch();

  const onSubmit = (e: any) => {
    if (user) {
      dispatch(
        userAsyncAction.update({
          id: user.id,
          fullName: e.fullName,
          username: e.username,
          avatar: e.avatar,
          email: e.email,
          phoneNum: e.phoneNum,
          address: e.address,
          role: e.role,
        })
      );
    } else {
      dispatch(
        userAsyncAction.create({
          fullName: e.fullName,
          username: e.username,
          password: e.password,
          avatar: e.avatar,
          email: e.email,
          phoneNum: e.phoneNum,
          address: e.address,
          role: e.role,
        })
      );
    }

    handleCancel();
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 flex items-center justify-center">
      <div className="w-full h-full relative">
        <div className="w-full h-full bg-black opacity-20"></div>
        <div className="w-[600px] bg-white rounded-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-4 pb-10">
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
            <div className="form-control relative">
              <label className="block mb-2 text-lg font-semibold" htmlFor="">
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
              <label className="block mb-2 text-lg font-semibold" htmlFor="">
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
              <label className="block mb-2 text-lg font-semibold" htmlFor="">
                Avatar
              </label>
              <input
                className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                type="text"
                defaultValue={user?.avatar}
                {...register("avatar", {
                  required: "Please enter avatar",
                })}
              />
              <p className="font-semibold bottom-2 absolute text-red-500">
                {errors.avatar?.message?.toString()}
              </p>
            </div>
            <div className="form-control relative">
              <label className="block mb-2 text-lg font-semibold" htmlFor="">
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
              <label className="block mb-2 text-lg font-semibold" htmlFor="">
                Phone Number
              </label>
              <input
                className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                type="number"
                defaultValue={user?.phoneNum}
                {...register("phoneNum", {
                  required: "Please enter phone number",
                  minLength: 10,
                  maxLength: 15,
                })}
              />
              <p className="font-semibold bottom-2 absolute text-red-500">
                {errors.phoneNum?.message?.toString()}
              </p>
            </div>
            <div className="form-control relative">
              <label className="block mb-2 text-lg font-semibold" htmlFor="">
                Address
              </label>
              <input
                className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                type="text"
                defaultValue={user?.address}
                {...register("address", {
                  required: "Please enter address",
                })}
              />
              <p className="font-semibold bottom-2 absolute text-red-500">
                {errors.address?.message?.toString()}
              </p>
            </div>
            <div className="form-control relative">
              <label className="block mb-2 text-lg font-semibold" htmlFor="">
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

            <div className="flex justify-between items-center">
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
