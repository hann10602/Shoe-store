import { categoryAsyncAction } from "@/store/category/action";
import { shoeAsyncAction } from "@/store/shoe/action";
import { isGettingShoesSelector, shoesSelector } from "@/store/shoe/selector";
import { ShoeType } from "@/store/shoe/type";
import { useAppDispatch } from "@/store/store";
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeletePage from "../DeletePage";
import ChangeProductPage from "./ChangeProductPage";
import { useHistory } from "react-router-dom";

type Props = {};

const ProductList = (props: Props) => {
  const [page, setPage] = useState<number>(1);
  const [isChangePage, setIsChangePage] = useState<boolean>(false);
  const [isDeletePage, setIsDeletePage] = useState<boolean>(false);
  const [isMenuBar, setIsMenuBar] = useState<number | undefined>(undefined);
  const [selectedEntity, setSelectedEntity] = useState<ShoeType | undefined>(
    undefined
  );
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const shoes = useSelector(shoesSelector);
  const isGettingShoes = useSelector(isGettingShoesSelector);

  const dispatch = useAppDispatch();
  const history = useHistory();

  const tablePagination = Array.from(
    { length: Math.ceil(shoes.length / 10) },
    (_, index) => index + 1
  );

  const skeletonArray = Array.from({ length: 10 }, (_, index) => index + 1);

  const successNotify = () => {
    toast.success("Success");
    dispatch(shoeAsyncAction.getAll());
    dispatch(categoryAsyncAction.getAll());
  };

  const failedNotify = (message: string) => {
    toast.error(message);
  };

  const handleDelete = (id: number) => {
    dispatch(shoeAsyncAction.deletes({ id }))
      .then(() => {
        successNotify();
      })
      .catch((err) => {
        if (err.message === "ERR_NETWORK") {
          history.push("/sign-in");
        } else {
          failedNotify("Failed");
        }
      });
    setIsDeletePage(false);
    setSelectedId(undefined);
  };

  const handleDeleteCancel = () => {
    setIsDeletePage(false);
    setSelectedId(undefined);
  };

  const handleChangeCancel = () => {
    setIsChangePage(false);
    setSelectedEntity(undefined);
  };

  useEffect(() => {
    dispatch(shoeAsyncAction.getAll());
    dispatch(categoryAsyncAction.getAll());
  }, []);

  return (
    <>
      {isChangePage && (
        <ChangeProductPage
          successNotify={successNotify}
          failedNotify={failedNotify}
          handleCancel={handleChangeCancel}
          shoe={selectedEntity}
        />
      )}
      {selectedId && isDeletePage && (
        <DeletePage
          id={selectedId}
          handleDelete={handleDelete}
          handleCancel={handleDeleteCancel}
        />
      )}
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
      <div>
        <button
          className="px-10 py-3 bg-gray-200 rounded-md mb-6 font-semibold"
          onClick={() => setIsChangePage(true)}
        >
          Add
        </button>
      </div>
      <div className="overflow-auto rounded-md border border-solid border-gray-300">
        <table className="h-full w-full min-w-max">
          <thead>
            <tr className="bg-gray-200">
              <th className="min-w-[12%] h-10">Id</th>
              <th className="min-w-[12%] h-10">Name</th>
              <th className="min-w-[12%] h-10">Price</th>
              <th className="min-w-[12%] h-10">Sale Price</th>
              <th className="min-w-[12%] h-10">Quantity</th>
              <th className="min-w-[12%] h-10">Average Star</th>
              <th className="min-w-[12%] h-10">Category</th>
              <th className="min-w-[12%] h-10">Options</th>
            </tr>
          </thead>
          <tbody>
            {!isGettingShoes ? (
              shoes.slice(10 * (page - 1), 10 * (page - 1) + 10).map((shoe) => (
                <tr key={shoe.id}>
                  <td className="text-center h-14">{shoe.id}</td>
                  <td className="text-center w-[300px] h-14">{shoe.name}</td>
                  <td className="text-center h-14">{shoe.price}</td>
                  <td className="text-center h-14">{shoe.salePrice}</td>
                  <td className="text-center h-14">{shoe.quantity}</td>
                  <td className="text-center h-14">{shoe.averageStar}</td>
                  <td className="text-center h-14">{shoe.category}</td>
                  <td className="text-center h-14">
                    <div
                      className="flex justify-center cursor-pointer relative"
                      onClick={() =>
                        isMenuBar === undefined
                          ? setIsMenuBar(shoe.id)
                          : setIsMenuBar(undefined)
                      }
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={20}
                        height={20}
                        viewBox="0 0 426.667 426.667"
                      >
                        <circle cx="42.667" cy="213.333" r="42.667" />
                        <circle cx="213.333" cy="213.333" r="42.667" />
                        <circle cx="384" cy="213.333" r="42.667" />
                      </svg>
                      <div
                        className={`${
                          isMenuBar === shoe.id ? "block" : "hidden"
                        } absolute right-10 top-6 bg-white z-10 border border-solid border-gray-300`}
                      >
                        <div
                          className="w-28 px-5 py-3 text-center hover:bg-gray-300 border-solid border-b border-gray-300"
                          onClick={() => {
                            setIsChangePage(true);
                            setSelectedEntity(shoe);
                          }}
                        >
                          Update
                        </div>
                        <div
                          className="w-28 px-5 py-3 text-center hover:bg-gray-300"
                          onClick={() => {
                            setIsDeletePage(true);
                            setSelectedId(shoe.id);
                          }}
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <>
                {skeletonArray.map((value) => (
                  <tr key={value} className="h-14">
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
        <div className="flex justify-center items-center border-t border-solid border-gray-300 py-3">
          {tablePagination.map((item) => (
            <div
              className="w-10 h-10 cursor-pointer mr-2 last:mr-0 flex items-center justify-center rounded-md bg-gray-300"
              onClick={() => setPage(item)}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
