import React from "react";
import Img1 from "../img/for men.png";
import Img2 from "../img/dress1.png";
import Img3 from "../img/dress2.png";

const ManSection = () => {
  return (
    <section className="sector">
      <div className="container">
        <div className="sector-title">
          <span>MEN</span>
          <div className="sector-title-arrow">
            <button className="man-right"></button>
            <button className="man-left"></button>
          </div>
        </div>
        <div className="row sector-rectangle">
          <div className="col-12 order-2 order-md-1 col-md-8 col-lg-6 for-sector">
            <img src={Img1} />
            <span>FOR MEN</span>
            <button>More</button>
          </div>
          <div className="col-12 order-1 order-md-2 col-md-4 col-lg-6">
            <div className="row">
              <div className="col-12 col-lg-6 rectangle-dress mb-4">
                <a href="#">
                  <img src={Img2} />
                </a>
                <h6>Men's Stretch Color Slim Jeans Pants Size 28-42 GS21</h6>
                <div className="rectangle-price">
                  <div className="rectangle-price-left">
                    <h5> £ 44.19</h5>
                    <i className="fa fa-star orange" aria-hidden="true"></i>
                    <i className="fa fa-star orange" aria-hidden="true"></i>
                    <i className="fa fa-star orange" aria-hidden="true"></i>
                    <i className="fa fa-star orange" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <div className="rectangle-price-right">
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 rectangle-dress mb-4">
                <a href="#">
                  <img src={Img3} />
                </a>
                <h6>NWT Gucci Men's Dark Blue Slim Fit Jeans</h6>
                <div className="rectangle-price">
                  <div className="rectangle-price-left">
                    <h5> £ 66.79</h5>
                    <i className="fa fa-star orange" aria-hidden="true"></i>
                    <i className="fa fa-star orange" aria-hidden="true"></i>
                    <i className="fa fa-star orange" aria-hidden="true"></i>
                    <i className="fa fa-star orange" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <div className="rectangle-price-right">
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManSection;
