import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { shoesSelector } from "@/store/shoe/selector";
import { useHistory } from "react-router-dom";
import AverageStar from "@/components/AverageStar";

type Props = {};

const ProductGroup = (props: Props) => {
  const history = useHistory();

  const products = useSelector(shoesSelector);

  return (
    <div id="product">
      <h1 id="product-title">Products</h1>
      <div id="product-group">
        {products.map((item) => (
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
        ))}
      </div>
    </div>
  );
};

export default ProductGroup;
