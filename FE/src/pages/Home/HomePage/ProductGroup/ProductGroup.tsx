import React, { memo, useEffect } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { isGettingShoesSelector, shoesSelector } from "@/store/shoe/selector";
import { useHistory } from "react-router-dom";
import AverageStar from "@/components/AverageStar";
import { useAppDispatch } from "@/store/store";
import { shoeAsyncAction } from "@/store/shoe/action";

type Props = {};

const ProductGroup = (props: Props) => {
  const history = useHistory();

  const dispatch = useAppDispatch();

  const isGettingAllSelector = useSelector(isGettingShoesSelector);
  const shoes = useSelector(shoesSelector);

  useEffect(() => {
    dispatch(shoeAsyncAction.getAll());
  }, [shoes, dispatch]);

  return (
    <div id="product">
      <h1 id="product-title">Products</h1>
      <div id="product-group">
        {!isGettingAllSelector && shoes ? (
          shoes.map((item) => (
            <div className="product-wrapper" key={item.id}>
              <div onClick={() => history.push(`/shoe?id=${item.id}`)}>
                <img className="product-image" src={item.imageUrls[0]} alt="" />
                <p className="product-name">{item.name}</p>
              </div>
              <div className="star-wrapper">
                <AverageStar averageStar={item.averageStar} />
              </div>
              <p className="product-price">{item.price}$</p>
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
      </div>
    </div>
  );
};

export default memo(ProductGroup);
