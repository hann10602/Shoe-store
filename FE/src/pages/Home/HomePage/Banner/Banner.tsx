import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

type Props = {};

const Banner = (props: Props) => {
  const history = useHistory();
  return (
    <div id="banner-wrapper">
      <div id="banner">
        <p id="banner-title">Stylish Footwear for Every Occasion</p>
        <div id="banner-btn-group">
          <button className="banner-btn">Dash Board</button>
          <button
            className="banner-btn"
            onClick={() => history.push("/register")}
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
