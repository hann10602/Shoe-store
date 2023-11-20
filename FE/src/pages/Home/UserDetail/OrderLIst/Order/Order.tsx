import { cartAsyncAction } from "@/store/cart/action";
import { CartType } from "@/store/cart/type";
import { useAppDispatch } from "@/store/store";
import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

type Props = {
  order: CartType;
};

const Order = ({ order }: Props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  return (
    <div className="order-wrapper">
      <div className="order-header">
        <div className="order-information">
          <div className="shoe-information">
            <img
              className="shoe-image"
              src={order.shoeImage}
              alt=""
              onClick={() => history.push(`/shoe?id=${order.shoeId}`)}
            />
            <div className="shoe-detail">
              <div className="shoe-name">{order.shoeName}</div>
              <div className="shoe-size">Size: {order.sizeCode}</div>
            </div>
          </div>
          <div className="product-buy-quantity">
            <button
              className="fix-quantity-btn"
              onClick={() => {
                if (order.quantity > 1) {
                  dispatch(
                    cartAsyncAction.update({
                      id: order.id,
                      quantity: order.quantity - 1,
                    })
                  );
                }
              }}
            >
              {" "}
              -{" "}
            </button>
            <div className="buy-quantity">{order.quantity}</div>
            <button
              className="fix-quantity-btn"
              onClick={() => {
                if (order.quantity < order.maxQuantity) {
                  dispatch(
                    cartAsyncAction.update({
                      id: order.id,
                      quantity: order.quantity + 1,
                    })
                  );
                }
              }}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div className="price-wrapper">
            <div
              className={`${
                order.shoeSalePrice ? "origin-price" : "shoe-price"
              }`}
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(order.shoePrice)}
            </div>
            {order.shoeSalePrice && (
              <div className="shoe-price">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(order.shoeSalePrice)}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="order-options-wrapper">
        <div className="order-options-btn">
          <button
            className="buy-btn"
            onClick={() =>
              dispatch(cartAsyncAction.order({ idList: [order.id] }))
            }
          >
            Buy
          </button>
          <button
            className="remove-btn"
            onClick={() => dispatch(cartAsyncAction.deletes({ id: order.id }))}
          >
            Remove
          </button>
        </div>
        <div className="total-price">
          <p style={{ fontSize: 16, color: "black", marginRight: 12 }}>
            Total:{" "}
          </p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(
            order.shoeSalePrice
              ? order.quantity * order.shoeSalePrice
              : order.quantity * order.shoePrice
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Order);
