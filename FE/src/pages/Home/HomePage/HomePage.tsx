import React from "react";
import "./style.scss";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main>
      <div id="banner-wrapper">
        <div id="banner">
          <p id="banner-title">Stylish Footwear for Every Occasion</p>
          <div id="banner-btn-group">
            <button className="banner-btn">Dash Board</button>
            <button className="banner-btn">Dash Board</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
