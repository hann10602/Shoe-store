import AverageStar from "@/components/AverageStar";
import { sizes } from "@/constants/size";
import { cartAsyncAction } from "@/store/cart/action";
import { categoryAsyncAction } from "@/store/category/action";
import {
  categoriesSelector,
  isGettingCategoriesSelector,
} from "@/store/category/selector";
import { shoeAsyncAction } from "@/store/shoe/action";
import { isGettingShoesSelector, shoesSelector } from "@/store/shoe/selector";
import { ShoeType } from "@/store/shoe/type";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./style.scss";
import { userSelector } from "@/store/user/selector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

type Props = {};

const SearchPage = (props: Props) => {
  const [chooseSizesPage, setChooseSizesPage] = useState<boolean>(false);
  const [shoeId, setShoeId] = useState<number | undefined>(undefined);
  const [shoes, setShoes] = useState<ShoeType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sizeChoose, setSizeChoose] = useState<string>("");
  const [starChoose, setStarChoose] = useState<number | undefined>(undefined);
  const [sizeList, setSizeList] = useState<string[]>([]);
  const [categoryChoose, setCategoryChoose] = useState<string>("");
  const [priceFrom, setPriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");
  const [shoePage, setShoePage] = useState<number>(1);

  const history = useHistory();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const categories = useSelector(categoriesSelector);
  const shoesSearch = useSelector(shoesSelector);

  const loginUser = useSelector(userSelector);

  const isSearchShoes = useSelector(isGettingShoesSelector);
  const isGettingCategories = useSelector(isGettingCategoriesSelector);

  const searchParam = new URLSearchParams(location.search).get("search");
  const starParam = new URLSearchParams(location.search).get("star");
  const sizeParam = new URLSearchParams(location.search).get("size");
  const categoryParam = new URLSearchParams(location.search).get("category");
  const priceFromParam = new URLSearchParams(location.search).get("price-from");
  const priceToParam = new URLSearchParams(location.search).get("price-to");

  const shoesPagination = Array.from(
    { length: Math.ceil(shoes.length / 8) },
    (_, index) => index + 1
  );

  const starFilter = Array.from(
    { length: Math.ceil(5) },
    (_, index) => index + 1
  );

  const successNotify = () => {
    toast.success("Success");
  };

  const failedNotify = () => {
    toast.error("Failed");
  };

  useEffect(() => {
    let searchResultString: string = "";

    if (search.trim() !== "") {
      searchResultString += `&search=${search
        .trim()
        .split(" ")
        .filter(Boolean)
        .join(" ")}`;
    }

    if (sizeChoose !== "") {
      searchResultString += `&size=${sizeChoose}`;
    }

    if (starChoose !== undefined) {
      searchResultString += `&star=${starChoose}`;
    }

    if (categoryChoose !== "") {
      searchResultString += `&category=${categoryChoose}`;
    }

    if (priceFrom !== "") {
      searchResultString += `&price-from=${priceFrom}`;
    }

    if (priceTo !== "") {
      searchResultString += `&price-to=${priceTo}`;
    }

    history.push(`/search?s=?${searchResultString}`);
  }, [
    search,
    sizeChoose,
    categoryChoose,
    priceFrom,
    priceTo,
    starChoose,
    history,
  ]);

  useEffect(() => {
    dispatch(categoryAsyncAction.getAll());
    dispatch(shoeAsyncAction.getAll());
  }, [dispatch]);

  useEffect(() => {
    // const searchResultParams: SearchShoes = {};

    if (searchParam) {
      // searchResultParams.search = searchParam;
      setSearch(searchParam);
    }
    if (sizeParam) {
      // searchResultParams.size = sizeParam;
      setSizeChoose(sizeParam);
    }
    if (starParam) {
      // searchResultParams.size = sizeParam;
      setStarChoose(Number(starParam));
    }
    if (categoryParam) {
      // searchResultParams.category = categoryParam;
      setCategoryChoose(categoryParam);
    }
    if (priceFromParam) {
      // searchResultParams.priceFrom = priceFromParam;
      setPriceFrom(priceFromParam);
    }
    if (priceToParam) {
      // searchResultParams.priceTo = priceToParam;
      setPriceTo(priceToParam);
    }

    setShoes(
      shoesSearch.filter((shoe) => {
        if (searchParam) {
          if (!shoe.name.toUpperCase().includes(searchParam.toUpperCase())) {
            return false;
          }
        }
        if (starParam) {
          if (shoe.averageStar !== Number(starParam)) {
            return false;
          }
        }
        if (sizeParam) {
          if (!shoe.shoeSizes.includes(sizeParam)) {
            return false;
          }
        }
        if (categoryParam) {
          if (!(shoe.category === categoryParam)) {
            return false;
          }
        }
        if (priceFrom) {
          if (!(shoe.price > Number(priceFromParam))) {
            return false;
          }
        }
        if (priceTo) {
          if (!(shoe.price < Number(priceToParam))) {
            return false;
          }
        }

        return true;
      })
    );

    setShoePage(1);
  }, [location.search, shoesSearch]);

  return (
    <>
      <div className="header-space"></div>
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
                setShoeId(undefined);
              }}
            >
              x
            </button>
            <p className="choose-size-title">Choose size</p>
            <div className="size-wrapper">
              {sizeList.map((size) => (
                <div
                  className="size-item"
                  key={size}
                  onClick={() => {
                    if (loginUser) {
                      dispatch(
                        cartAsyncAction.create({
                          userId: loginUser.id,
                          shoeId: shoeId,
                          sizeCode: size,
                          quantity: 1,
                        })
                      )
                        .then(() => {
                          successNotify();
                        })
                        .catch((err) => {
                          if (err.message === "ERR_NETWORK") {
                            history.push("/sign-in");
                          } else {
                            failedNotify();
                          }
                        });
                    }
                    setChooseSizesPage(false);
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div id="search">
        {searchParam && (
          <div id="search-text">Search result for: {searchParam}</div>
        )}
        <div id="search-body">
          <div id="search-filter">
            <div id="text-filter">
              <div id="text-wrapper">
                <input
                  id="text-result"
                  name="text-result"
                  type="text"
                  value={search}
                  placeholder="Searching"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span id="text-icon">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 512 512"
                  >
                    <path d="M310,190c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S315.52,190,310,190z" />

                    <path
                      d="M500.281,443.719l-133.48-133.48C388.546,277.485,400,239.555,400,200C400,89.72,310.28,0,200,0S0,89.72,0,200
			s89.72,200,200,200c39.556,0,77.486-11.455,110.239-33.198l36.895,36.895c0.005,0.005,0.01,0.01,0.016,0.016l96.568,96.568
			C451.276,507.838,461.319,512,472,512c10.681,0,20.724-4.162,28.278-11.716C507.837,492.731,512,482.687,512,472
			S507.837,451.269,500.281,443.719z M305.536,345.727c0,0.001-0.001,0.001-0.002,0.002C274.667,368.149,238.175,380,200,380
			c-99.252,0-180-80.748-180-180S100.748,20,200,20s180,80.748,180,180c0,38.175-11.851,74.667-34.272,105.535
			C334.511,320.988,320.989,334.511,305.536,345.727z M326.516,354.793c10.35-8.467,19.811-17.928,28.277-28.277l28.371,28.371
			c-8.628,10.183-18.094,19.65-28.277,28.277L326.516,354.793z M486.139,486.139c-3.78,3.78-8.801,5.861-14.139,5.861
			s-10.359-2.081-14.139-5.861l-88.795-88.795c10.127-8.691,19.587-18.15,28.277-28.277l88.798,88.798
			C489.919,461.639,492,466.658,492,472C492,477.342,489.919,482.361,486.139,486.139z"
                    />

                    <path
                      d="M200,40c-88.225,0-160,71.775-160,160s71.775,160,160,160s160-71.775,160-160S288.225,40,200,40z M200,340
			c-77.196,0-140-62.804-140-140S122.804,60,200,60s140,62.804,140,140S277.196,340,200,340z"
                    />

                    <path
                      d="M312.065,157.073c-8.611-22.412-23.604-41.574-43.36-55.413C248.479,87.49,224.721,80,200,80c-5.522,0-10,4.478-10,10
			c0,5.522,4.478,10,10,10c41.099,0,78.631,25.818,93.396,64.247c1.528,3.976,5.317,6.416,9.337,6.416
			c1.192,0,2.405-0.215,3.584-0.668C311.472,168.014,314.046,162.229,312.065,157.073z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div id="size-filter">
              <p id="size-title">Star:</p>
              <div id="size-wrapper">
                {starFilter.map((star) => (
                  <div
                    className={`size-item ${
                      star === starChoose ? "size-choose" : ""
                    }`}
                    key={star}
                    onClick={() => {
                      if (star === starChoose) {
                        setStarChoose(undefined);
                      } else {
                        setStarChoose(star);
                      }
                    }}
                  >
                    {star}
                  </div>
                ))}
              </div>
            </div>
            <div id="size-filter">
              <p id="size-title">Size:</p>
              <div id="size-wrapper">
                {sizes.map((size) => (
                  <div
                    className={`size-item ${
                      size.code === sizeChoose ? "size-choose" : ""
                    }`}
                    key={size.id}
                    onClick={() => {
                      if (size.code === sizeChoose) {
                        setSizeChoose("");
                      } else {
                        setSizeChoose(size.code);
                      }
                    }}
                  >
                    {size.name}
                  </div>
                ))}
              </div>
            </div>
            <div id="price-filter">
              <p id="price-title">Price:</p>
              <div className="price-input-wrapper">
                <label htmlFor="">From:</label>
                <input
                  className="price-input"
                  value={priceFrom}
                  name="price-from"
                  type="number"
                  onChange={(e) => setPriceFrom(e.target.value)}
                />
              </div>
              <div className="price-input-wrapper">
                <label htmlFor="">To:</label>
                <input
                  className="price-input"
                  value={priceTo}
                  name="price-to"
                  type="number"
                  onChange={(e) => setPriceTo(e.target.value)}
                />
              </div>
            </div>
            <div id="category-filter">
              <p id="category-title">Category:</p>
              <div>
                {!isGettingCategories && categories ? (
                  categories.map((category) => (
                    <label className="category-item" key={category.id}>
                      <input
                        type="checkbox"
                        className="category-checkbox"
                        name="category"
                        value={category.code}
                        checked={category.code === categoryChoose}
                        onClick={() => {
                          if (category.code === categoryChoose) {
                            setCategoryChoose("");
                          } else {
                            setCategoryChoose(category.code);
                          }
                        }}
                        onChange={(e) => {}}
                      />
                      {category.name}
                    </label>
                  ))
                ) : (
                  <div className="is-loading">
                    <svg
                      id="Capa_1"
                      enable-background="new 0 0 497 497"
                      height="40"
                      viewBox="0 0 497 497"
                      width="40"
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
            <div id="remove-filter">
              <button
                id="remove-filter-btn"
                onClick={() => {
                  setSearch("");
                  setSizeChoose("");
                  setStarChoose(undefined);
                  setCategoryChoose("");
                  setPriceFrom("");
                  setPriceTo("");
                }}
              >
                Remove filter
              </button>
            </div>
          </div>

          {searchParam && (
            <div id="mobile-search-text">Search result for: {searchParam}</div>
          )}
          <div id="search-result">
            {!isSearchShoes && shoesSearch ? (
              shoes
                .slice(8 * (shoePage - 1), 8 * (shoePage - 1) + 8)
                .map((item) => (
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
                          setSizeList(item.shoeSizes);
                          setShoeId(item.id);
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
            <div id="review-pagination">
              {shoesPagination.map((item) => (
                <div
                  className={`${
                    shoePage === item ? "pagination-option-choose" : ""
                  } pagination-option`}
                  onClick={() => setShoePage(item)}
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
