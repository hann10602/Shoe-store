import { useAppDispatch } from "@/store/store";
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DeletePage from "../DeletePage";
import ChangeBillPage from "./ChangeBillPage";
import { BillType } from "@/store/bill/type";
import { billsSelector, isGettingBillsSelector } from "@/store/bill/selector";
import { billAsyncAction } from "@/store/bill/action";
import { useHistory, useLocation } from "react-router-dom";

type Props = {};

const BillList = (props: Props) => {
  const [page, setPage] = useState<number>(1);
  const [isChangePage, setIsChangePage] = useState<boolean>(false);
  const [isDeletePage, setIsDeletePage] = useState<boolean>(false);
  const [isMenuBar, setIsMenuBar] = useState<number | undefined>(undefined);
  const [selectedEntity, setSelectedEntity] = useState<BillType | undefined>(
    undefined
  );
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const bills = useSelector(billsSelector);
  const isGettingBills = useSelector(isGettingBillsSelector);

  const dispatch = useAppDispatch();

  const history = useHistory();
  const location = useLocation();

  const message = new URLSearchParams(location.search).get("message");

  const tablePagination = Array.from(
    { length: Math.ceil(bills.length / 10) },
    (_, index) => index + 1
  );

  const skeletonArray = Array.from({ length: 10 }, (_, index) => index + 1);

  const handleDelete = (id: number) => {
    dispatch(billAsyncAction.deletes({ id }))
      .then(() => {
        history.push("/admin?tab=bill&message=Success");
        window.location.reload();
      })
      .catch(() => {
        history.push("/admin?tab=bill&message=Failure");
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
    dispatch(billAsyncAction.getAll());
  }, []);

  return (
    <>
      {isChangePage && selectedEntity && (
        <ChangeBillPage
          handleCancel={handleChangeCancel}
          bill={selectedEntity}
        />
      )}
      {selectedId && isDeletePage && (
        <DeletePage
          id={selectedId}
          handleDelete={handleDelete}
          handleCancel={handleDeleteCancel}
        />
      )}

      {message &&
        (message === "Success" ? (
          <div className="w-full px-8 py-2 bg-green-400 rounded-md text-white font-semibold text-lg mb-4">
            Success
          </div>
        ) : (
          <div className="w-full px-8 py-2 bg-red-400 rounded-md text-white font-semibold text-lg mb-4">
            Failure
          </div>
        ))}
      <div className="overflow-auto rounded-md border border-solid border-gray-300">
        <table className="h-full w-full min-w-max">
          <thead>
            <tr className="bg-gray-200">
              <th className="min-w-[12%] h-10">Id</th>
              <th className="min-w-[12%] h-10">User</th>
              <th className="min-w-[12%] h-10">Shoe</th>
              <th className="min-w-[12%] h-10">Quantity</th>
              <th className="min-w-[12%] h-10">Size</th>
              <th className="min-w-[12%] h-10">Order date</th>
              <th className="min-w-[12%] h-10">Bill status</th>
              <th className="min-w-[12%] h-10">Bill received</th>
              <th className="min-w-[12%] h-10">Total price</th>
              <th className="min-w-[12%] h-10">Options</th>
            </tr>
          </thead>
          <tbody>
            {!isGettingBills ? (
              bills.slice(10 * (page - 1), 10 * (page - 1) + 10).map((bill) => (
                <tr key={bill.id}>
                  <td className="text-center h-14">{bill.id}</td>
                  <td className="text-center h-14">{bill.userName}</td>
                  <td className="text-center h-14">{bill.shoeName}</td>
                  <td className="text-center h-14">{bill.quantity}</td>
                  <td className="text-center h-14">{bill.shoeSize}</td>
                  <td className="text-center h-14">{bill.createdDate}</td>
                  <td className="text-center h-14">
                    <div className="flex justify-center items-center">
                      <div
                        className={`${
                          bill.status === "WAIT" && "bg-blue-400"
                        } ${bill.status === "DELIVERY" && "bg-yellow-400"} ${
                          bill.status === "COMPLETED" && "bg-green-400"
                        } rounded-full text-white font-semibold px-5 h-max w-max py-2`}
                      >
                        {bill.status}
                      </div>
                    </div>
                  </td>
                  <td className="text-center h-14 flex justify-center items-center">
                    <div className="flex justify-center items-center">
                      <div
                        className={`${
                          bill.received ? "bg-gray-400" : "bg-red-400"
                        } rounded-full text-white font-semibold px-5 h-max w-max py-2`}
                      >
                        {bill.received ? "Received" : "Have not received"}
                      </div>
                    </div>
                  </td>
                  <td className="text-center h-14">{bill.totalPrice}</td>
                  <td className="text-center h-14">
                    <div
                      className="flex justify-center cursor-pointer relative"
                      onClick={() =>
                        isMenuBar === undefined
                          ? setIsMenuBar(bill.id)
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
                          isMenuBar === bill.id ? "block" : "hidden"
                        } absolute right-10 top-6 bg-white z-10 border border-solid border-gray-300`}
                      >
                        <div
                          className="w-28 px-5 py-3 text-center hover:bg-gray-300 border-solid border-b border-gray-300"
                          onClick={() => {
                            setIsChangePage(true);
                            setSelectedEntity(bill);
                          }}
                        >
                          Update
                        </div>
                        <div
                          className="w-28 px-5 py-3 text-center hover:bg-gray-300"
                          onClick={() => {
                            setIsDeletePage(true);
                            setSelectedId(bill.id);
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

export default BillList;
