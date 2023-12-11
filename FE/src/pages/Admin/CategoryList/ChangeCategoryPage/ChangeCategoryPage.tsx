import { categoryAsyncAction } from "@/store/category/action";
import { CategoryType } from "@/store/category/type";
import { useAppDispatch } from "@/store/store";
import { failedNotify } from "@/utils";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type Props = {
  category?: CategoryType;
  successNotify: () => void;
  handleCancel: () => void;
};

const ChangeCategoryPage = ({
  category,
  successNotify,
  handleCancel,
}: Props) => {
  const form = useForm();

  const { register, formState, handleSubmit } = form;

  const history = useHistory();

  const { errors } = formState;

  const dispatch = useAppDispatch();

  const onSubmit = (e: any) => {
    if (category) {
      dispatch(
        categoryAsyncAction.update({
          id: category?.id,
          name: e.name,
          code: e.code,
        })
      )
        .then(() => successNotify())
        .catch((err) => {
          if (err.message === "ERR_NETWORK") {
            history.push("/sign-in");
          } else {
            failedNotify("This category code is exist");
          }
        });
    } else {
      dispatch(
        categoryAsyncAction.create({
          name: e.name,
          code: e.code,
        })
      )
        .then(() => successNotify())
        .catch((err) => {
          if (err.message === "ERR_NETWORK") {
            history.push("/sign-in");
          } else {
            failedNotify("This category code is exist");
          }
        });
    }

    handleCancel();
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 z-20 flex items-center justify-center">
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
                Name
              </label>
              <input
                className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                type="text"
                defaultValue={category?.name}
                {...register("name", {
                  required: "Please enter name",
                })}
              />
              <p className="font-semibold bottom-2 absolute text-red-500">
                {errors.name?.message?.toString()}
              </p>
            </div>
            <div className="form-control relative">
              <label className="block mb-2 text-lg font-semibold" htmlFor="">
                Code
              </label>
              <input
                className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                type="text"
                defaultValue={category?.code}
                {...register("code", {
                  required: "Please enter code",
                })}
              />
              <p className="font-semibold bottom-2 absolute text-red-500">
                {errors.code?.message?.toString()}
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

export default ChangeCategoryPage;
