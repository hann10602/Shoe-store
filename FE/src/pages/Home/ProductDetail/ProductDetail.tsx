import SuggestProduct from "@/assets/img/web/suggest-product.jpg";
import AverageStar from "@/components/AverageStar";
import { LoginUserType } from "@/store/auth/type";
import { cartAsyncAction } from "@/store/cart/action";
import { evaluateAsyncAction } from "@/store/evaluate/action";
import {
  evaluatesSelector,
  isGettingEvaluatesSelector,
} from "@/store/evaluate/selector";
import { shoeAsyncAction } from "@/store/shoe/action";
import {
  isGettingShoeSelector,
  isGettingShoesSelector,
  shoeSelector,
  shoesSelector,
} from "@/store/shoe/selector";
import { sizeAsyncAction } from "@/store/size/action";
import { quantitySelector } from "@/store/size/selector";
import { useAppDispatch } from "@/store/store";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./style.scss";

type Props = {};

const ProductDetail = (props: Props) => {
  const [render, setRender] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<string>();
  const [buyQuantity, setBuyQuantity] = useState<number>(1);
  const [productQuantity, setProductQuantity] = useState<number | undefined>(
    undefined
  );
  const [buySize, setBuySize] = useState<string>("");
  const [hasBuySize, setHasBuySize] = useState<boolean>(true);
  const [evaluatePage, setEvaluatePage] = useState<number>(1);
  const [evaluateOrderStar, setEvaluateOrderStar] = useState<number>(5);
  const [evaluateSection, setEvaluateSection] = useState<boolean>(false);
  const [breakpoint, setBreakPoint] = useState<number>();
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [filterTitle, setFilterTitle] = useState<
    "Normal" | "High to low" | "Low to high"
  >("Normal");

  const suggestRef: React.Ref<CarouselRef> = useRef(null);

  const form = useForm();

  const { register, formState, handleSubmit, reset } = form;

  const { errors } = formState;

  const screenWidth: number = window.innerWidth;

  const dispatch = useAppDispatch();

  const location = useLocation();

  const history = useHistory();

  const shoe = useSelector(shoeSelector);
  const shoesSearch = useSelector(shoesSelector);
  const quantity = useSelector(quantitySelector);
  const evaluates = useSelector(evaluatesSelector);

  const isGettingShoe = useSelector(isGettingShoeSelector);
  const isSearchShoes = useSelector(isGettingShoesSelector);
  const isGettingEvaluates = useSelector(isGettingEvaluatesSelector);

  const userInformation: string | null = localStorage.getItem("login-user");

  const user: LoginUserType =
    userInformation != null ? JSON.parse(userInformation) : null;

  const reviewPagination = Array.from(
    { length: Math.ceil(evaluates.length / 5) },
    (_, index) => index + 1
  );

  const handleBuyProduct = () => {
    if (!user) {
      history.push("/sign-in");
    } else if (hasBuySize && buySize === "") {
      setHasBuySize(false);
    } else if (shoe) {
      setEvaluateSection(true);
      dispatch(
        cartAsyncAction.create({
          userId: user.id,
          shoeId: shoe.id,
          sizeCode: buySize,
          quantity: buyQuantity,
        })
      );
    }
  };

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  const handleSetEvaluateStar = useCallback((star: number) => {
    setEvaluateOrderStar(star);
  }, []);

  const handleSubmitEvaluate = (e: FieldValues) => {
    if (user && shoe) {
      dispatch(
        evaluateAsyncAction.create({
          userId: user.id,
          shoeId: shoe.id,
          star: evaluateOrderStar,
          evaluate: e.evaluate,
        })
      ).catch((err) => console.log("alo"));

      reset();
      setEvaluateSection(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    dispatch(
      shoeAsyncAction.getOne({
        id: Number(params.get("id")),
      })
    );
    dispatch(shoeAsyncAction.getAll());
    dispatch(
      evaluateAsyncAction.getByShoeId({ shoeId: Number(params.get("id")) })
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [render]);

  useEffect(() => {
    setMainImage(shoe?.imageUrls[0]);
  }, [shoe]);

  useEffect(() => {
    setProductQuantity(quantity?.quantity);
    setBuyQuantity(1);
  }, [quantity]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize && windowSize < 1050) {
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

  return (
    <div>
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
      <div className="header-space"></div>
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
              <div className="price-wrapper">
                <div
                  className={`${
                    shoe.salePrice ? "origin-price" : "shoe-price"
                  }`}
                >
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(shoe.price)}
                </div>
                {shoe.salePrice && (
                  <div className="shoe-price-only">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(shoe.salePrice)}
                  </div>
                )}
              </div>
              <div className="product-size-group">
                {shoe.shoeSizes.map((size) => (
                  <div
                    className={`${
                      buySize === size ? "size-choose" : "product-size"
                    }`}
                    key={size}
                    onClick={() => {
                      dispatch(
                        sizeAsyncAction.getSizeQuantity({
                          shoeId: shoe.id,
                          sizeCode: size,
                        })
                      );
                      setHasBuySize(true);
                      setBuySize(size);
                      setBuyQuantity(1);
                    }}
                  >
                    {size}
                  </div>
                ))}
                {hasBuySize || <p className="size-error">Please choose size</p>}
              </div>
              <p className="product-quantity">
                Quantity:
                <p style={{ marginLeft: 8 }}>{productQuantity}</p>
              </p>

              <div className="product-buy-quantity">
                <button
                  className="fix-quantity-btn"
                  onClick={() => {
                    if (quantity) {
                      if (buyQuantity > 1) {
                        setBuyQuantity((prev) => prev - 1);
                      }
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
                    if (quantity) {
                      if (buyQuantity < quantity.quantity) {
                        setBuyQuantity((prev) => prev + 1);
                      }
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
          <div className="more-information">
            <div style={{ width: "100%" }}>
              <div id="description-wrapper">
                <div id="product-description">
                  <p id="description-title">Description</p>
                  <p id="description-content">{shoe.description}</p>
                </div>
                <div id="product-evaluate">
                  <p id="evaluate-title">Review snapshot</p>
                  <div id="evaluate-content">
                    <div className="star-wrapper">
                      <AverageStar averageStar={shoe.averageStar} />
                    </div>
                    <p>{shoe.averageStar}</p>
                    <p>{evaluates.length} Reviews</p>
                  </div>
                  <div id="rating-distribution">
                    <p id="rating-title">Rating distribution</p>
                    <div className="rating-star">
                      <p>5 stars</p>
                      <div className="rating-frame">
                        <div
                          className="rating-body"
                          style={{
                            width: `${
                              (evaluates.filter(
                                (evaluate) => evaluate.star === 5
                              ).length /
                                evaluates.length) *
                                100 || 0
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-star">
                      <p>4 stars</p>
                      <div className="rating-frame">
                        <div
                          className="rating-body"
                          style={{
                            width: `${
                              (evaluates.filter(
                                (evaluate) => evaluate.star === 4
                              ).length /
                                evaluates.length) *
                                100 || 0
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-star">
                      <p>3 stars</p>
                      <div className="rating-frame">
                        <div
                          className="rating-body"
                          style={{
                            width: `${
                              (evaluates.filter(
                                (evaluate) => evaluate.star === 3
                              ).length /
                                evaluates.length) *
                                100 || 0
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-star">
                      <p>2 stars</p>
                      <div className="rating-frame">
                        <div
                          className="rating-body"
                          style={{
                            width: `${
                              (evaluates.filter(
                                (evaluate) => evaluate.star === 2
                              ).length /
                                evaluates.length) *
                                100 || 0
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-star">
                      <p>1 stars</p>
                      <div className="rating-frame">
                        <div
                          className="rating-body"
                          style={{
                            width: `${
                              (evaluates.filter(
                                (evaluate) => evaluate.star === 1
                              ).length /
                                evaluates.length) *
                                100 || 0
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="review">
                {!isGettingEvaluates && evaluates ? (
                  <div>
                    <div id="review-header">
                      <p id="review-title">
                        Reviewed by {evaluates.length} customers
                      </p>
                      <div id="review-filter">
                        <p id="review-filter-title">
                          {filterTitle === "High to low" && (
                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 343.089 343.089"
                            >
                              <path
                                d="M276.034,99.628L176.769,2.452c-2.397-2.885-6.679-3.281-9.564-0.885c-0.321,0.267-0.618,0.563-0.885,0.885
                               L67.055,99.628c-3.174,2.942-3.362,7.901-0.42,11.075c1.459,1.574,3.499,2.481,5.645,2.509h47.02v125.91
                               c0.892,5.262,5.148,9.305,10.449,9.927h83.592c4.18,0,5.224-5.224,5.224-9.927v-125.91h52.245
                               c4.328-0.057,7.79-3.611,7.733-7.939C278.515,103.127,277.608,101.087,276.034,99.628z"
                              />
                              <path
                                d="M213.34,264.722h-83.592c-4.328,0-7.837,3.509-7.837,7.837s3.509,7.837,7.837,7.837h83.592
                               c4.328,0,7.837-3.509,7.837-7.837S217.669,264.722,213.34,264.722z"
                              />
                              <path
                                d="M213.34,296.069h-83.592c-4.328,0-7.837,3.509-7.837,7.837s3.509,7.837,7.837,7.837h83.592
                               c4.328,0,7.837-3.509,7.837-7.837S217.669,296.069,213.34,296.069z"
                              />
                              <path
                                d="M213.34,327.415h-83.592c-4.328,0-7.837,3.509-7.837,7.837s3.509,7.837,7.837,7.837h83.592
                               c4.328,0,7.837-3.509,7.837-7.837S217.669,327.415,213.34,327.415z"
                              />
                            </svg>
                          )}
                          {filterTitle === "Low to high" && (
                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 342.832 342.832"
                            >
                              <path
                                d="M276.326,232.386c-1.459-1.574-3.499-2.481-5.645-2.509h-52.245v-125.91c0-4.702-1.045-9.927-5.224-9.927H129.62
                                 c-5.301,0.621-9.557,4.664-10.449,9.927v125.91h-47.02c-4.328,0.057-7.79,3.611-7.733,7.939c0.028,2.146,0.935,4.186,2.509,5.645
                                 l99.265,97.176c2.827,2.885,7.458,2.933,10.343,0.106c0.036-0.035,0.071-0.07,0.106-0.106l99.265-97.176
                                 C279.08,240.519,279.268,235.561,276.326,232.386z"
                              />
                              <path
                                d="M129.62,78.367h83.592c4.328,0,7.837-3.509,7.837-7.837s-3.509-7.837-7.837-7.837H129.62
                                 c-4.328,0-7.837,3.509-7.837,7.837S125.292,78.367,129.62,78.367z"
                              />
                              <path
                                d="M129.62,47.02h83.592c4.328,0,7.837-3.509,7.837-7.837s-3.509-7.837-7.837-7.837H129.62
                                 c-4.328,0-7.837,3.509-7.837,7.837S125.292,47.02,129.62,47.02z"
                              />
                              <path
                                d="M129.62,15.673h83.592c4.328,0,7.837-3.509,7.837-7.837c0-4.328-3.509-7.837-7.837-7.837H129.62
                                 c-4.328,0-7.837,3.509-7.837,7.837C121.783,12.165,125.292,15.673,129.62,15.673z"
                              />
                            </svg>
                          )}
                        </p>
                        <svg
                          id="Layer_1"
                          onClick={() => {
                            if (filterTitle === "Normal") {
                              setFilterTitle("High to low");
                            }
                            if (filterTitle === "High to low") {
                              setFilterTitle("Low to high");
                            }
                            if (filterTitle === "Low to high") {
                              setFilterTitle("Normal");
                            }
                          }}
                          enable-background="new 0 0 512 512"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m16 90.259h243.605c7.342 33.419 37.186 58.508 72.778 58.508s65.436-25.088 72.778-58.508h90.839c8.836 0 16-7.164 16-16s-7.164-16-16-16h-90.847c-7.356-33.402-37.241-58.507-72.77-58.507-35.548 0-65.419 25.101-72.772 58.507h-243.611c-8.836 0-16 7.164-16 16s7.164 16 16 16zm273.877-15.958c0-.057.001-.115.001-.172.07-23.367 19.137-42.376 42.505-42.376 23.335 0 42.403 18.983 42.504 42.339l.003.235c-.037 23.407-19.091 42.441-42.507 42.441-23.406 0-42.454-19.015-42.507-42.408zm206.123 347.439h-90.847c-7.357-33.401-37.241-58.507-72.77-58.507-35.548 0-65.419 25.102-72.772 58.507h-243.611c-8.836 0-16 7.163-16 16s7.164 16 16 16h243.605c7.342 33.419 37.186 58.508 72.778 58.508s65.436-25.089 72.778-58.508h90.839c8.836 0 16-7.163 16-16s-7.164-16-16-16zm-163.617 58.508c-23.406 0-42.454-19.015-42.507-42.408l.001-.058c0-.058.001-.115.001-.172.07-23.367 19.137-42.377 42.505-42.377 23.335 0 42.403 18.983 42.504 42.338l.003.235c-.034 23.41-19.089 42.442-42.507 42.442zm163.617-240.248h-243.605c-7.342-33.419-37.186-58.507-72.778-58.507s-65.436 25.088-72.778 58.507h-90.839c-8.836 0-16 7.164-16 16 0 8.837 7.164 16 16 16h90.847c7.357 33.401 37.241 58.507 72.77 58.507 35.548 0 65.419-25.102 72.772-58.507h243.611c8.836 0 16-7.163 16-16 0-8.836-7.164-16-16-16zm-273.877 15.958c0 .058-.001.115-.001.172-.07 23.367-19.137 42.376-42.505 42.376-23.335 0-42.403-18.983-42.504-42.338l-.003-.234c.035-23.41 19.09-42.441 42.507-42.441 23.406 0 42.454 19.014 42.507 42.408z" />
                        </svg>
                      </div>
                    </div>
                    {evaluates
                      .slice(5 * (evaluatePage - 1), 5 * (evaluatePage - 1) + 5)
                      .sort((a, b) => {
                        if (filterTitle === "High to low") {
                          return a.star - b.star;
                        }
                        if (filterTitle === "Low to high") {
                          return b.star - a.star;
                        }

                        const dateA = new Date(a.createdDate);
                        const dateB = new Date(b.createdDate);

                        return dateB.getTime() - dateA.getTime();
                      })
                      .map((evaluate) => (
                        <div key={evaluate.id} className="review-wrapper">
                          <div className="evaluate-information">
                            <div className="star-wrapper">
                              <AverageStar averageStar={evaluate.star} />
                            </div>
                            <p className="review-evaluate">
                              {evaluate.evaluate}
                            </p>
                          </div>
                          <div className="review-information">
                            <div className="review-date">
                              Submitted:{" "}
                              <p className="date">{evaluate.createdDate}</p>
                            </div>
                            <div className="review-by">
                              By: <p className="by">{evaluate.userName}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    <div id="review-pagination">
                      {reviewPagination.map((item) => (
                        <div
                          className="pagination-option"
                          onClick={() => setEvaluatePage(item)}
                          key={item}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
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
              {!isSearchShoes ? (
                <div id="suggest-product-frame">
                  <div className="image-wrapper">
                    <img
                      id="suggest-image"
                      src={SuggestProduct}
                      alt="suggest-product"
                    />
                  </div>
                  <div id="suggest-product-wrapper">
                    <div id="suggest-product-title">
                      <div className="side-line"></div>
                      <p id="title">Suggest product</p>
                      <div className="side-line"></div>
                    </div>
                    <div id="suggest-product-group">
                      <div
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div className="product-group-wrapper">
                          <button
                            className="left-carousel-btn"
                            onClick={() => suggestRef.current?.prev()}
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
                            onClick={() => suggestRef.current?.next()}
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
                        draggable
                        ref={suggestRef}
                      >
                        {shoesSearch
                          .filter((shoeSearch) =>
                            shoeSearch.category.includes(shoe.category)
                          )
                          .slice(0, 5)
                          .map((sp) => (
                            <div className="suggest-product" key={sp.id}>
                              <div className="product-wrapper">
                                <div>
                                  <img
                                    className="product-image"
                                    src={sp.imageUrls[0]}
                                    alt=""
                                    onClick={() => {
                                      history.push(`/shoe?id=${sp.id}`);
                                      setBuySize("");
                                      setProductQuantity(undefined);
                                      setRender(!render);
                                    }}
                                  />
                                  <p className="product-name">{sp.name}</p>
                                </div>
                                <div className="star-wrapper">
                                  <AverageStar averageStar={sp.averageStar} />
                                </div>
                                <div className="price-wrapper">
                                  <div
                                    className={`${
                                      sp.salePrice
                                        ? "origin-price"
                                        : "shoe-price"
                                    }`}
                                  >
                                    {new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "USD",
                                    }).format(sp.price)}
                                  </div>
                                  {sp.salePrice && (
                                    <div className="shoe-price-only">
                                      {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                      }).format(sp.salePrice)}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
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

export default ProductDetail;
