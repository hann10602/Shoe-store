import AverageStar from "@/components/AverageStar";
import { billAsyncAction } from "@/store/bill/action";
import {
  billsByUserIdSelector,
  isGettingBillsByUserIdSelector,
} from "@/store/bill/selector";
import { evaluateAsyncAction } from "@/store/evaluate/action";
import { useAppDispatch } from "@/store/store";
import { getToken } from "@/utils";
import React, { useCallback, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

type Props = {};

const OrderList = (props: Props) => {
  const [evaluateSection, setEvaluateSection] = useState<boolean>(false);
  const [evaluateOrderStar, setEvaluateOrderStar] = useState<number>(5);
  const [evaluateShoeId, setEvaluateShoeId] = useState<number | undefined>(
    undefined
  );

  const form = useForm();

  const { register, formState, handleSubmit, reset } = form;

  const { errors } = formState;

  const history = useHistory();
  const dispatch = useAppDispatch();

  const token = getToken();

  const bills = useSelector(billsByUserIdSelector);

  const isGettingBillsByUserId = useSelector(isGettingBillsByUserIdSelector);

  const successNotify = () => {
    toast.success("Success");
  };

  const failedNotify = () => {
    toast.error("Failed");
  };

  const handleSetEvaluateStar = useCallback((star: number) => {
    setEvaluateOrderStar(star);
  }, []);

  const handleSubmitEvaluate = (e: FieldValues) => {
    if (token && evaluateShoeId) {
      dispatch(
        evaluateAsyncAction.create({
          userId: token.id,
          shoeId: evaluateShoeId,
          star: evaluateOrderStar,
          evaluate: e.evaluate,
        })
      )
        .then(() => {
          dispatch(billAsyncAction.getByUserId({ userId: token.id }));
          successNotify();
        })
        .catch((err) => {
          if (err.message === "ERR_NETWORK") {
            history.push("/sign-in");
          } else {
            failedNotify();
          }
        });

      reset();
      setEvaluateSection(false);
    }
  };

  useEffect(() => {
    dispatch(billAsyncAction.getByUserId({ userId: token.id }));
  }, []);
  return (
    <div id="table-wrapper">
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
      {evaluateSection && <div id="evaluate-background"></div>}
      {evaluateSection && (
        <div id="evaluate-section">
          <form
            id="evaluate-wrapper"
            onSubmit={handleSubmit(handleSubmitEvaluate)}
          >
            <div id="evaluate-close-wrapper">
              <button
                id="evaluate-close-btn"
                onClick={() => setEvaluateSection(false)}
              >
                x
              </button>
            </div>
            <p id="evaluate-title">Evaluate</p>
            <div className="star-wrapper">
              <AverageStar
                averageStar={5}
                size="large"
                fixable={true}
                handleEvaluate={handleSetEvaluateStar}
              />
            </div>
            <div className="text-area-wrapper">
              <textarea
                id="evaluate-content"
                rows={4}
                {...register("evaluate", {
                  required: "Please enter evaluate",
                })}
              ></textarea>
              <p className="field-message">
                {errors?.evaluate?.message?.toString()}
              </p>
            </div>
            <div id="evaluate-btn-wrapper">
              <button className="evaluate-btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      )}
      <table id="order-table">
        <tr>
          <th>Id</th>
          <th>Shoe</th>
          <th>Quantity</th>
          <th>Size</th>
          <th>Order date</th>
          <th>Order status</th>
          <th>Received</th>
          <th>Evaluate</th>
          <th>Total price</th>
        </tr>
        {!isGettingBillsByUserId &&
          bills &&
          bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.shoeName}</td>
              <td>{bill.quantity}</td>
              <td>{bill.shoeSize}</td>
              <td>{bill.createdDate}</td>
              <td>
                <div className="status-wrapper">
                  <div
                    className={`${bill.status === "WAIT" && "yellow-bg"} ${
                      bill.status === "DELIVERY" && "green-bg"
                    } ${bill.status === "COMPLETED" && "blue-bg"} status-body`}
                  >
                    {bill.status}
                  </div>
                </div>
              </td>
              <td>
                <div className="status-wrapper">
                  <div
                    className={`${
                      bill.received ? "gray-bg" : "red-bg"
                    } status-body`}
                  >
                    {bill.received ? "Received" : "Have not received"}
                  </div>
                </div>
              </td>
              <td>
                {bill.received &&
                  (bill.isEvaluate ? (
                    <div className="disable-evaluate-btn">Evaluated</div>
                  ) : (
                    <div
                      className="evaluate-btn"
                      onClick={() => {
                        setEvaluateSection(true);
                        setEvaluateShoeId(bill.shoeId);
                      }}
                    >
                      Evaluate
                    </div>
                  ))}
              </td>
              <td>{bill.totalPrice}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default OrderList;
