import React from "react";
import Clothes from "../img/Clothes.png";
import Footwear from "../img/Footwear.png";
import HandBangs from "../img/Hand Bags.png";

const Category = () => {
  return (
    <section className="category">
      <div className="container">
        <div className="row slider1">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="layout"></div>
            <img src={Clothes} alt="clothes" />
            <div className="content">
              <span>Clothes</span>
              <button>Click here</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="layout"></div>
            <img src={Footwear} alt="Footwear" />
            <div className="content">
              <span>Footwear</span>
              <button>Click here</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="layout"></div>
            <img src={HandBangs} alt="HandBangs" />
            <div className="content">
              <span>Hand Bags</span>
              <button>Click here</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
