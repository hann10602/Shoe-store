import AverageStar from "@/components/AverageStar";
import { cartAsyncAction } from "@/store/cart/action";
import { shoeAsyncAction } from "@/store/shoe/action";
import {
  isGettingShoesByCategory1Selector,
  isGettingShoesByCategory2Selector,
  isGettingShoesByCategory3Selector,
  shoesByCategory1Selector,
  shoesByCategory2Selector,
  shoesByCategory3Selector,
} from "@/store/shoe/selector";
import { ShoeType } from "@/store/shoe/type";
import { useAppDispatch } from "@/store/store";
import { getToken } from "@/utils";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import React, { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type GroupShoe = {
  id: number;
  category: string;
  isGetting: boolean;
  ref: React.RefObject<CarouselRef>;
  shoes: ShoeType[];
};

type Props = {};

const ProductGroup = (props: Props) => {
  const [shoeId, setShoeId] = useState<number | undefined>(undefined);
  const [chooseSizesPage, setChooseSizesPage] = useState<boolean>(false);
  const [shoeSizes, setShoeSizes] = useState<string[]>([]);
  const [groupShoeList, setGroupShoeList] = useState<GroupShoe[]>([]);
  const [breakpoint, setBreakPoint] = useState<number>();
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const carouselRef1: React.Ref<CarouselRef> = useRef(null);
  const carouselRef2: React.Ref<CarouselRef> = useRef(null);
  const carouselRef3: React.Ref<CarouselRef> = useRef(null);

  const history = useHistory();

  const dispatch = useAppDispatch();

  const isGettingShoesByCategory1 = useSelector(
    isGettingShoesByCategory1Selector
  );
  const isGettingShoesByCategory2 = useSelector(
    isGettingShoesByCategory2Selector
  );
  const isGettingShoesByCategory3 = useSelector(
    isGettingShoesByCategory3Selector
  );

  const shoesByCategory1 = useSelector(shoesByCategory1Selector);
  const shoesByCategory2 = useSelector(shoesByCategory2Selector);
  const shoesByCategory3 = useSelector(shoesByCategory3Selector);

  const token = getToken();

  const successNotify = () => {
    toast.success("Success");
  };

  const failedNotify = () => {
    toast.error("Failed");
  };

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    dispatch(shoeAsyncAction.getByCategory1({ categoryCode: "SNEAKER" }));
    dispatch(shoeAsyncAction.getByCategory2({ categoryCode: "BOOT" }));
    dispatch(shoeAsyncAction.getByCategory3({ categoryCode: "SPORT" }));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize && windowSize < 900) {
      setBreakPoint(1);
    }
    if (900 < windowSize && windowSize < 1280) {
      setBreakPoint(2);
    }
    if (1280 < windowSize && windowSize < 1600) {
      setBreakPoint(3);
    }
    if (1600 < windowSize) {
      setBreakPoint(4);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  useEffect(() => {
    setGroupShoeList([
      {
        id: 1,
        category: "Sneaker",
        ref: carouselRef1,
        isGetting: isGettingShoesByCategory1,
        shoes: shoesByCategory1,
      },
      {
        id: 2,
        category: "Boot",
        ref: carouselRef2,
        isGetting: isGettingShoesByCategory2,
        shoes: shoesByCategory2,
      },
      {
        id: 3,
        category: "Sport",
        ref: carouselRef3,
        isGetting: isGettingShoesByCategory3,
        shoes: shoesByCategory3,
      },
    ]);
  }, [
    isGettingShoesByCategory1,
    shoesByCategory1,
    isGettingShoesByCategory2,
    shoesByCategory2,
    isGettingShoesByCategory3,
    shoesByCategory3,
  ]);

  return (
    <div id="product">
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
      {chooseSizesPage && shoeId && (
        <div className="choose-size-page">
          <div className="choose-size-background"></div>
          <div className="choose-size-wrapper">
            <button
              className="choose-size-btn"
              onClick={() => {
                setChooseSizesPage(false);
                setShoeSizes([]);
                setShoeId(undefined);
              }}
            >
              x
            </button>
            <p className="choose-size-title">Choose size</p>
            <div className="size-wrapper">
              {shoeSizes.map((size) => (
                <div
                  className="size-item"
                  key={size}
                  onClick={() => {
                    if (token) {
                      dispatch(
                        cartAsyncAction.create({
                          userId: token.id,
                          shoeId: shoeId,
                          sizeCode: size,
                          quantity: 1,
                        })
                      )
                        .then(() => {
                          successNotify();
                          cartAsyncAction.getByUserId({
                            userId: token.id,
                          });
                        })
                        .catch((err) => {
                          if (err.message === "ERR_NETWORK") {
                            history.push("/sign-in");
                          } else {
                            failedNotify();
                          }
                        });
                      setShoeSizes([]);
                      setChooseSizesPage(false);
                    } else {
                      history.push("/sign-in");
                    }
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div>
        {groupShoeList.map((group) => (
          <div key={group.id}>
            <p className="group-title">{group.category}</p>
            <div className="product-group" key={group.id}>
              <div
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <div className="product-group-wrapper">
                  <button
                    className="left-carousel-btn"
                    onClick={() => group.ref.current?.prev()}
                  >
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="rgb(81, 162, 255)"
                      x="0px"
                      y="0px"
                      viewBox="0 0 492 492"
                    >
                      <path
                        d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
                      />
                    </svg>
                  </button>
                  <button
                    className="right-carousel-btn"
                    onClick={() => group.ref.current?.next()}
                  >
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={20}
                      height={20}
                      fill="rgb(81, 162, 255)"
                      viewBox="0 0 492.004 492.004"
                    >
                      <path
                        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <Carousel
                slidesToShow={breakpoint}
                dots={false}
                ref={group.ref}
                draggable
              >
                {!group.isGetting && group.shoes ? (
                  group.shoes.map((item) => (
                    <div className="product-wrapper" key={item.id}>
                      <div onClick={() => history.push(`/shoe?id=${item.id}`)}>
                        <img
                          className="product-image"
                          src={item.imageUrls[0]}
                          alt=""
                        />
                        <p className="product-name">{item.name}</p>
                      </div>
                      <div className="star-wrapper">
                        <AverageStar averageStar={item.averageStar} />
                      </div>
                      <div className="price-wrapper">
                        <div
                          className={`${
                            item.salePrice ? "origin-price" : "shoe-price"
                          }`}
                        >
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(item.price)}
                        </div>
                        {item.salePrice && (
                          <div className="shoe-price-only">
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(item.salePrice)}
                          </div>
                        )}
                      </div>
                      <div className="btn-group">
                        <button
                          className="add-to-cart-btn"
                          onClick={() => {
                            setShoeId(item.id);
                            setShoeSizes(item.shoeSizes);
                            setChooseSizesPage(true);
                          }}
                        >
                          Add to cart
                        </button>
                        <button
                          className="buy-btn"
                          onClick={() => history.push(`/shoe?id=${item.id}`)}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  ))
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
              </Carousel>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductGroup);
