import React, { useState } from "react";
import Img1 from "../img/dress5.png";
import Img2 from "../img/dress6.png";
import Img3 from "../img/dress7.png";
import Img4 from "../img/dress8.png";
import Img5 from "../img/dress13.jpg";
import Img6 from "../img/dress14.jpg";
import Img7 from "../img/dress15.jpg";
import Img8 from "../img/dress16.jpg";
import Img9 from "../img/dress21.jpg";
import Img10 from "../img/dress22.jpg";
import Img11 from "../img/dress23.jpg";
import Img12 from "../img/dress24.jpg";

const NewSection = () => {
  const [activeTab, setactiveTab] = useState(1);

  const tabs = [
    { name: "NEW ARRIVALS", id: 1 },
    { name: "BEST SELLERS", id: 2 },
    { name: "POPULAR", id: 3 },
  ];

  const tabContent = [
    {
      id: 1,
      classId: "new-arrivals",
      img: [
        { img: Img1, name: "Urban Chic Skinny Pants", price: "80.99" },
        { img: Img2, name: "Serenity Shoulder Bag", price: "66.50" },
        { img: Img3, name: "Classic High-Waisted Trousers", price: "45.00" },
        { img: Img4, name: "Arctic Peak Winter Boots", price: "97.20" },
      ],
    },
    {
      id: 2,
      classId: "best-sellers",
      img: [
        { img: Img5, name: "Nike Dri-FIT Training Tee", price: "47.55" },
        { img: Img6, name: "Nike Pro Compression Shirt", price: "99.50" },
        { img: Img7, name: "Nike Legend Short Sleeve Shirt", price: "30.99" },
        { img: Img8, name: "Nike Dry Academy Soccer Shirt", price: "70.60" },
      ],
    },
    {
      id: 3,
      classId: "popular",
      img: [
        { img: Img9, name: "Nike Air Max Tote", price: "48.55" },
        { img: Img10, name: "Nike Elite Backpack", price: "23.99" },
        { img: Img11, name: "Nike Heritage Duffel", price: "47.00" },
        { img: Img12, name: "Nike Vapor Gym Sack", price: "77.88" },
      ],
    },
  ];

  return (
    <section className="sector">
      <div className="container">
        <ul className="sector-title row">
          {tabs.map((tab) => (
            <li
              className="col-3"
              key={tab.id}
              onClick={() => setactiveTab(tab.id)}
            >
              <a
                href="#new-arrivals"
                className={
                  activeTab == tab.id ? "tab-link tab-link-active" : "tab-link"
                }
              >
                {tab.name}
              </a>
            </li>
          ))}
          <li className="col-3">
            <button className="tabs-arrow-right"></button>
            <button className="tabs-arrow-left"></button>
          </li>
        </ul>
        <div className="tab">
          {tabContent.map((tab) => (
            <div
              id={tab.classId}
              className={
                tab.id == activeTab
                  ? "row sector-rectangle tab-content tab-content-active"
                  : "row sector-rectangle tab-content"
              }
              key={tab.id}
            >
              {tab.img.map((img, index) => (
                <div
                  className="col-12 col-md-4 col-lg-3 rectangle-dress mb-4"
                  key={index}
                >
                  <a href="#">
                    <img src={img.img} />
                  </a>
                  <h6>{img.name}</h6>
                  <div className="rectangle-price">
                    <div className="rectangle-price-left">
                      <h5> £ {img.price}</h5>
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
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSection;
