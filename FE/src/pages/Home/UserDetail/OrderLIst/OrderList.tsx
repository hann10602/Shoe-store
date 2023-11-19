import { cartAsyncAction } from "@/store/cart/action";
import {
  cartsByUserIdSelector,
  isGettingCartsByUserIdSelector,
} from "@/store/cart/selector";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import Order from "./Order/Order";
import "./style.scss";

type Props = { userId: number };

const OrderList = ({ userId }: Props) => {
  const dispatch = useAppDispatch();

  const isGettingCartsByUserId = useSelector(isGettingCartsByUserIdSelector);
  const orders = useSelector(cartsByUserIdSelector);

  const totalPrice = useMemo(
    () =>
      orders.reduce(
        (r, order) =>
          order.shoeSalePrice
            ? (r += order.quantity * order.shoeSalePrice)
            : (r += order.quantity * order.shoePrice),
        0
      ),
    [orders]
  );

  useEffect(() => {
    dispatch(cartAsyncAction.getByUserId({ userId }));
  }, [dispatch, userId]);

  return (
    <div id="orders">
      {!isGettingCartsByUserId ? (
        <>
          <div>
            {orders.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </div>
          <div id="total-payment">
            <div>
              <button
                id="buy-all-btn"
                onClick={() =>
                  dispatch(
                    cartAsyncAction.order({
                      idList: orders.map((order) => order.id),
                    })
                  )
                }
              >
                Buy all
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p id="total-price-title">Total price:</p>
              <p id="total-price-value">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice)}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="is-loading">
          <svg
            id="Capa_1"
            enable-background="new 0 0 497 497"
            height="60"
            viewBox="0 0 497 497"
            width="60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <circle cx="98" cy="376" fill="#909ba6" r="53" />
              <circle cx="439" cy="336" fill="#c8d2dc" r="46" />
              <circle cx="397" cy="112" fill="#e9edf1" r="38" />
              <ellipse
                cx="56.245"
                cy="244.754"
                fill="#7e8b96"
                rx="56.245"
                ry="54.874"
              />
              <ellipse
                cx="217.821"
                cy="447.175"
                fill="#a2abb8"
                rx="51.132"
                ry="49.825"
              />
              <ellipse
                cx="349.229"
                cy="427.873"
                fill="#b9c3cd"
                rx="48.575"
                ry="47.297"
              />
              <ellipse
                cx="117.092"
                cy="114.794"
                fill="#5f6c75"
                rx="58.801"
                ry="57.397"
              />
              <ellipse
                cx="453.538"
                cy="216.477"
                fill="#dce6eb"
                rx="43.462"
                ry="42.656"
              />
              <circle cx="263" cy="62" fill="#4e5a61" r="62" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default OrderList;
