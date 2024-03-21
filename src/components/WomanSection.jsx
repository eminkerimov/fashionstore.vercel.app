import React from "react";
import Img1 from "../img/for women.png";
import Img2 from "../img/dress3.png";
import Img3 from "../img/dress4.png";

const WomanSection = () => {

  return (
    <section className="sector">
      <div className="container">
        <div className="sector-title">
          <span>WOMEN</span>
          <div className="sector-title-arrow">
            <button className="woman-right"></button>
            <button className="woman-left"></button>
          </div>
        </div>
        <div className="row sector-rectangle">
          <div className="col-12 col-md-4 col-lg-6">
            <div className="row">
              <div className="col-12 col-lg-6 rectangle-dress mb-4">
                <a href="#">
                  <img src={Img2} />
                </a>
                <h6>Virtuous Eyelet Coat in Blue</h6>
                <div className="rectangle-price">
                  <div className="rectangle-price-left">
                    <h5> £ 111.00</h5>
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
                <h6>Utility Dress Deep Olive</h6>
                <div className="rectangle-price">
                  <div className="rectangle-price-left">
                    <h5> £ 89.99</h5>
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
          <div className="col-12 col-md-8 col-lg-6 for-sector">
            <img src={Img1} />
            <span>FOR WOMEN</span>
            <button>Click here</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomanSection;
