import { sizes } from "@/constants/size";
import { categoriesSelector } from "@/store/category/selector";
import { shoeAsyncAction } from "@/store/shoe/action";
import { ShoeType } from "@/store/shoe/type";
import { useAppDispatch } from "@/store/store";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

type Props = {
  shoe?: ShoeType;
  successNotify: () => void;
  failedNotify: (message: string) => void;
  handleCancel: () => void;
};

const ChangeProductPage = ({
  shoe,
  successNotify,
  failedNotify,
  handleCancel,
}: Props) => {
  const cloud_name = "dcb5n0grf";
  const preset_key = "baswycwi";

  const [productImages, setProductImages] = useState<string[]>(
    shoe?.imageUrls || []
  );

  const form = useForm();

  const { register, formState, handleSubmit, control } = form;

  const { errors } = formState;

  const openFileRef = useRef<HTMLInputElement>(null);

  const categories = useSelector(categoriesSelector);

  const dispatch = useAppDispatch();

  const uploadImage = (files: FileList | null) => {
    if (!files) {
      return;
    }
    setProductImages([]);

    for (let i = 0; i < files.length; i++) {
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target?.result);
        };
        reader.readAsDataURL(files[i]);
      })
        .then((imgUri) => {
          setProductImages((prev) => [...prev, imgUri as string]);
        })
        .catch((err) => console.log(err));
    }
  };

  const onSubmit = (e: any) => {
    const files = openFileRef.current?.files;

    if (files && files.length !== 0) {
      const promises = Array.from(files).map(
        (file) =>
          new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", preset_key);

            axios
              .post(
                `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
                formData
              )
              .then((res) => resolve(res.data.secure_url));
          })
      );

      Promise.all(promises).then((imgs) => {
        if (shoe) {
          dispatch(
            shoeAsyncAction.update({
              id: shoe.id,
              name: e.name,
              price: e.price,
              description: e.description,
              salePrice: e.salePrice,
              category: e.category,
              imageUrls: imgs as string[],
              sizes: e.shoeSizes,
            })
          )
            .then(() => successNotify())
            .catch(() => failedNotify("Failed"));
        } else {
          dispatch(
            shoeAsyncAction.create({
              name: e.name,
              price: e.price,
              description: e.description,
              salePrice: e.salePrice,
              category: e.category,
              imageUrls: imgs as string[],
              sizes: e.shoeSizes,
            })
          )
            .then(() => successNotify())
            .catch(() => failedNotify("Failed"));
        }

        handleCancel();
      });
    } else {
      if (shoe) {
        dispatch(
          shoeAsyncAction.update({
            id: shoe.id,
            name: e.name,
            price: e.price,
            description: e.description,
            salePrice: e.salePrice,
            category: e.category,
            imageUrls: shoe.imageUrls,
            sizes: e.shoeSizes,
          })
        )
          .then(() => successNotify())
          .catch(() => failedNotify("Failed"));

        handleCancel();
      } else {
        if (e.imageUrls !== undefined) {
          dispatch(
            shoeAsyncAction.create({
              name: e.name,
              price: e.price,
              description: e.description,
              salePrice: e.salePrice,
              category: e.category,
              imageUrls: e.imageUrls,
              sizes: e.shoeSizes,
            })
          )
            .then(() => successNotify())
            .catch(() => failedNotify("Failed"));

          handleCancel();
        } else {
          failedNotify("Added image to created product");
        }
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
            <div>
              <div className="flex">
                <div className="w-1/2 mr-8">
                  <div className="form-control relative">
                    <label
                      className="block mb-2 text-lg font-semibold"
                      htmlFor=""
                    >
                      Name
                    </label>
                    <input
                      className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                      type="text"
                      defaultValue={shoe?.name}
                      {...register("name", {
                        required: "Please enter name",
                      })}
                    />
                    <p className="font-semibold bottom-2 absolute text-red-500">
                      {errors.name?.message?.toString()}
                    </p>
                  </div>
                  <div className="form-control relative">
                    <label
                      className="block mb-2 text-lg font-semibold"
                      htmlFor=""
                    >
                      Price
                    </label>
                    <input
                      className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                      type="number"
                      defaultValue={shoe?.price}
                      {...register("price", {
                        required: "Please enter price",
                      })}
                    />
                    <p className="font-semibold bottom-2 absolute text-red-500">
                      {errors.price?.message?.toString()}
                    </p>
                  </div>
                  <div className="form-control relative">
                    <label
                      className="block mb-2 text-lg font-semibold"
                      htmlFor=""
                    >
                      Sale price
                    </label>
                    <input
                      className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                      type="number"
                      defaultValue={shoe?.salePrice}
                      {...register("salePrice", {})}
                    />
                    <p className="font-semibold bottom-2 absolute text-red-500">
                      {errors.salePrice?.message?.toString()}
                    </p>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="form-control relative">
                    <label
                      className="block mb-2 text-lg font-semibold"
                      htmlFor=""
                    >
                      Description
                    </label>
                    <input
                      className="w-full border mb-8 border-solid border-gray-300 rounded-full h-10 text-lg px-3"
                      type="text"
                      defaultValue={shoe?.description}
                      {...register("description", {
                        required: "Please enter description",
                      })}
                    />
                    <p className="font-semibold bottom-2 absolute text-red-500">
                      {errors.description?.message?.toString()}
                    </p>
                  </div>
                  <div className="form-control relative">
                    <label
                      className="block mb-2 text-lg font-semibold"
                      htmlFor=""
                    >
                      Category
                    </label>
                    <select
                      defaultValue={shoe ? shoe.category : "SNEAKER"}
                      className="mb-6 w-40 h-10 border border-solid border-gray-300 text-lg rounded-md"
                      {...register("category", {
                        required: "Please choose category",
                      })}
                    >
                      {categories.map((category) => (
                        <option value={category.code} key={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <p className="font-semibold bottom-2 absolute text-red-500">
                      {errors.category?.message?.toString()}
                    </p>
                  </div>
                  <div className="form-control relative">
                    <label
                      className="block mb-2 mt-5 text-lg font-semibold"
                      htmlFor=""
                    >
                      Size
                    </label>
                    <Controller
                      name="shoeSizes"
                      control={control}
                      defaultValue={shoe ? shoe.shoeSizes : []}
                      render={({ field }) => (
                        <div className="flex mt-5">
                          {sizes.map((item) => (
                            <div className="w-5 mr-5" key={item.id}>
                              <input
                                className="w-5 h-5 cursor-pointer"
                                type="checkbox"
                                value={item.code}
                                checked={field.value.includes(item.code)}
                                onChange={() => {
                                  const updatedArray = field.value.includes(
                                    item.code
                                  )
                                    ? field.value.filter(
                                        (value: string) => value !== item.code
                                      )
                                    : [...field.value, item.code];
                                  field.onChange(updatedArray);
                                }}
                              />
                              <label>{item.name}</label>
                            </div>
                          ))}
                        </div>
                      )}
                    />
                    <p className="font-semibold bottom-2 absolute text-red-500">
                      {errors.shoeSizes?.message?.toString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full form-control relative">
                <label className="block mb-2 text-lg font-semibold" htmlFor="">
                  Image urls
                </label>
                <div className="flex w-full h-[188px] border border-dashed border-gray-300">
                  <div className="flex-1 overflow-x-scroll p-2">
                    <div className="w-max flex space-x-2">
                      {productImages.map((img) => (
                        <div className="w-40 h-40" key={img}>
                          <img
                            key={img}
                            src={img}
                            className="w-full h-full object-cover"
                            alt="product-img"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="w-40 h-40 cursor-pointer flex  items-center justify-center m-2 bg-white"
                    onClick={() => openFileRef.current?.click()}
                  >
                    <svg
                      height={100}
                      viewBox="0 0 469.33333 469.33333"
                      fill=""
                      width={100}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0" />
                    </svg>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={(e) => uploadImage(e.target.files)}
                    ref={openFileRef}
                  />
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

export default ChangeProductPage;
