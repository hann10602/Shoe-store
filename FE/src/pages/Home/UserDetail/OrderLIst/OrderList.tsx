import React, { useEffect } from "react";
import "./style.scss";
import { useAppDispatch } from "@/store/store";
import { billAsyncAction } from "@/store/bill/action";
import { useSelector } from "react-redux";
import {
  billsByUserIdSelector,
  isGettingBillsByUserIdSelector,
} from "@/store/bill/selector";

type Props = {
  userId: number;
};

const OrderList = ({ userId }: Props) => {
  const dispatch = useAppDispatch();

  const bills = useSelector(billsByUserIdSelector);

  const isGettingBillsByUserId = useSelector(isGettingBillsByUserIdSelector);

  useEffect(() => {
    dispatch(billAsyncAction.getByUserId({ userId }));
  }, []);
  return (
    <table id="order-table">
      <tr>
        <th>Id</th>
        <th>Shoe</th>
        <th>Quantity</th>
        <th>Size</th>
        <th>Order date</th>
        <th>Order status</th>
        <th>Received</th>
        <th>Total price</th>
      </tr>
      {isGettingBillsByUserId && bills && bills.map((bill) => <tr>
        
        <th>{bill.id}</th>
        <th>{bill.shoeName}</th>
        <th>{bill.quantity}</th>
        <th>{bill.shoeSize}</th>
        <th>{bill.createdDate}</th>
        <th>{bill.billStatus}</th>
        <th>{bill.billReceived}</th>
        <th>{bill.totalPrice}</th>
      </tr>)}
    </table>
  );
};

export default OrderList;
