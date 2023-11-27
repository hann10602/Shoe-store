import { useDebounce } from "@/hooks";
import { billAsyncAction } from "@/store/bill/action";
import { cartAsyncAction } from "@/store/cart/action";
import { CartType } from "@/store/cart/type";
import { useAppDispatch } from "@/store/store";
import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

type Props = {
  order: CartType;
};

const Cart = ({ order }: Props) => {
  const [currentQuantity, setCurrentQuantity] = useState<number>(
    order.quantity
  );

  const updateQuantity = useDebounce(currentQuantity, 300);

  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      cartAsyncAction.update({
        id: order.id,
        quantity: currentQuantity,
      })
    );
  }, [updateQuantity]);

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
          <div className="right-order">
            <div className="product-buy-quantity">
              <button
                className="fix-quantity-btn"
                onClick={() => {
                  if (currentQuantity > 1) {
                    setCurrentQuantity(currentQuantity - 1);
                  }
                }}
              >
                {" "}
                -{" "}
              </button>
              <div className="buy-quantity">{currentQuantity}</div>
              <button
                className="fix-quantity-btn"
                onClick={() => {
                  if (currentQuantity < order.maxQuantity) {
                    setCurrentQuantity(currentQuantity + 1);
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
      </div>
      <div className="order-options-wrapper">
        <div className="order-options-btn">
          <button
            className="buy-btn"
            onClick={() => {
              dispatch(
                billAsyncAction.createFromCart({
                  cartIdList: [order.id],
                })
              );
              history.push("/user?page=orders");
              window.location.reload();
            }}
          >
            Buy
          </button>
          <button
            className="remove-btn"
            onClick={() => {
              dispatch(cartAsyncAction.deletes({ id: order.id }));
              window.location.reload()
            }}
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

export default memo(Cart);
