import React, { useEffect, useState } from "react";
import "./style.scss";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "@/store/store";
import { shoeAsyncAction } from "@/store/shoe/action";
import { useSelector } from "react-redux";
import { isGettingShoeSelector, shoeSelector } from "@/store/shoe/selector";
import AverageStar from "@/components/AverageStar";
import { cartAsyncAction } from "@/store/cart/action";
import { userSelector } from "@/store/user/selector";

type Props = {};

const ProductDetail = (props: Props) => {
  const location = useLocation();
  const [mainImage, setMainImage] = useState<string>();
  const [buyQuantity, setBuyQuantity] = useState<number>(1);
  const [buySize, setBuySize] = useState<string>("");

  const dispatch = useAppDispatch();

  const shoe = useSelector(shoeSelector);
  const isGettingShoe = useSelector(isGettingShoeSelector);
  const user = useSelector(userSelector);

  const handleBuyProduct = () => {
    if (buySize !== "" && user && shoe) {
      console.log({
        userId: user.id,
        shoeId: shoe.id,
        sizeCode: buySize,
        quantity: buyQuantity,
      });
      // dispatch(
      //   cartAsyncAction.create({
      //     userId: user.id,
      //     shoeId: shoe.id,
      //     sizeCode: buySize,
      //     quantity: buyQuantity,
      //   })
      // );
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    dispatch(
      shoeAsyncAction.getOne({
        id: Number(params.get("id")),
      })
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location, dispatch]);

  useEffect(() => {
    setMainImage(shoe?.imageUrls[0]);
  }, [shoe]);

  return (
    <div>
      <div id="header-space"></div>
      {!isGettingShoe && shoe ? (
        <>
          <div id="product-detail">
            <div id="product-image">
              <img id="product-main-image" src={mainImage} alt="" />
              <div id="sub-images-group-wrapper">
                <div id="sub-images-group">
                  {shoe.imageUrls.map((shoeImage) => (
                    <div
                      key={shoeImage}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        className="product-sub-image"
                        src={shoeImage}
                        alt="sub-img"
                        onClick={() => setMainImage(shoeImage)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div id="product-statistics">
              <p className="product-name">{shoe.name}</p>
              <div className="star-wrapper">
                <AverageStar averageStar={shoe.averageStar} size="large" />
              </div>
              <p className="product-price">{shoe.price}$</p>
              <div className="product-size-group">
                {shoe.shoeSizes.map((size) => (
                  <div
                    className={`${
                      buySize === size ? "size-choose" : "product-size"
                    }`}
                    key={size}
                    onClick={() => setBuySize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
              <p className="product-quantity">Quantity: {shoe.quantity}</p>
              <div className="product-buy-quantity">
                <button
                  className="fix-quantity-btn"
                  onClick={() => {
                    if (buyQuantity > 1) {
                      setBuyQuantity((prev) => prev - 1);
                    }
                  }}
                >
                  {" "}
                  -{" "}
                </button>
                <div className="buy-quantity">{buyQuantity}</div>
                <button
                  className="fix-quantity-btn"
                  onClick={() => {
                    if (buyQuantity < shoe.quantity) {
                      setBuyQuantity((prev) => prev + 1);
                    }
                  }}
                >
                  {" "}
                  +{" "}
                </button>
              </div>

              <div className="buy-btn-wrapper">
                <button className="buy-btn" onClick={() => handleBuyProduct()}>
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="more-information"></div>
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

export default ProductDetail;
