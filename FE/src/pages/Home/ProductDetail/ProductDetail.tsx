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
  isSearchShoesSelector,
  shoeSelector,
  shoesSearchSelector,
} from "@/store/shoe/selector";
import { useAppDispatch } from "@/store/store";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./style.scss";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

const ProductDetail = (props: Props) => {
  const [mainImage, setMainImage] = useState<string>();
  const [buyQuantity, setBuyQuantity] = useState<number>(1);
  const [buySize, setBuySize] = useState<string>("");
  const [hasBuySize, setHasBuySize] = useState<boolean>(true);
  const [evaluatePage, setEvaluatePage] = useState<number>(1);
  const [evaluateOrderStar, setEvaluateOrderStar] = useState<number>(5);
  const [evaluateSection, setEvaluateSection] = useState<boolean>(false);

  const form = useForm();

  const { register, formState, handleSubmit, reset } = form;

  const { errors } = formState;

  const dispatch = useAppDispatch();

  const location = useLocation();

  const history = useHistory();

  const shoe = useSelector(shoeSelector);
  const shoesSearch = useSelector(shoesSearchSelector);
  const evaluates = useSelector(evaluatesSelector);

  const isGettingShoe = useSelector(isGettingShoeSelector);
  const isSearchShoes = useSelector(isSearchShoesSelector);
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
      );

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

    if (shoe) {
      dispatch(shoeAsyncAction.searchShoes({ category: shoe.category }));
      dispatch(evaluateAsyncAction.getByShoeId({ shoeId: shoe.id }));
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location, dispatch, shoe]);

  useEffect(() => {
    setMainImage(shoe?.imageUrls[0]);
  }, [shoe]);

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
              <p className="product-price">{shoe.price}$</p>
              <div className="product-size-group">
                {shoe.shoeSizes.map((size) => (
                  <div
                    className={`${
                      buySize === size ? "size-choose" : "product-size"
                    }`}
                    key={size}
                    onClick={() => {
                      setHasBuySize(true);
                      setBuySize(size);
                    }}
                  >
                    {size}
                  </div>
                ))}
                {hasBuySize || <p className="size-error">Please choose size</p>}
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
                          style={{ width: `${70}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-star">
                      <p>4 stars</p>
                      <div className="rating-frame">
                        <div
                          className="rating-body"
                          style={{ width: `${10}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-star">
                      <p>3 stars</p>
                      <div className="rating-frame">
                        <div
                          className="rating-body"
                          style={{ width: `${8}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-star">
                      <p>2 stars</p>
                      <div className="rating-frame">
                        <div
                          className="rating-body"
                          style={{ width: `${10}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-star">
                      <p>1 stars</p>
                      <div className="rating-frame">
                        <div
                          className="rating-body"
                          style={{ width: `${2}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="review">
                {!isGettingEvaluates && evaluates ? (
                  <div>
                    <p id="review-title">
                      Reviewed by {evaluates.length} customers
                    </p>
                    {evaluates
                      .slice(5 * (evaluatePage - 1), 5 * (evaluatePage - 1) + 5)
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
                      {shoesSearch.slice(0, 4).map((sp) => (
                        <div className="suggest-product">
                          <div className="product-wrapper" key={sp.id}>
                            <div
                              onClick={() => history.push(`/shoe?id=${sp.id}`)}
                            >
                              <img
                                className="product-image"
                                src={sp.imageUrls[0]}
                                alt=""
                              />
                              <p className="product-name">{sp.name}</p>
                            </div>
                            <div className="star-wrapper">
                              <AverageStar averageStar={sp.averageStar} />
                            </div>
                            <p className="product-price">{sp.price}$</p>
                          </div>
                        </div>
                      ))}
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
