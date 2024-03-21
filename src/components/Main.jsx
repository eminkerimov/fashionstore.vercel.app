import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import sliderImg from "../img/slider.jpg";
import sliderImg1 from "../img/slider1.jpg";
import sliderImg2 from "../img/slider2.jpg";
import sliderImg3 from "../img/slider3.jpg";

const Main = ({ mobileOpen }) => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    fade: true,
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="main">
      <div className={mobileOpen ? "mobile-menu open" : "mobile-menu"}>
        <ul>
          <li>
            <a href="https://www.youtube.com/">HOME</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">FEATURES</a>
          </li>
          <li>
            <a href="#">MEGA GROUP</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <ul className="mobile-social">
          <li>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="slider">
        <Slider ref={sliderRef} {...settings}>
          <div className="slider-item">
            <img src={sliderImg} alt="sliderImg" />
          </div>
          <div className="slider-item">
            <img src={sliderImg1} alt="sliderImg1" />
          </div>
          <div className="slider-item">
            <img src={sliderImg2} alt="sliderImg2" />
          </div>
          <div className="slider-item">
            <img src={sliderImg3} alt="sliderImg3" />
          </div>
        </Slider>
      </div>
      <div className="main-content">
        <span>NEW!</span>
        <h1>COLLECTION 2016!</h1>
        <span>for</span>
        <span>MEN & WOMEN</span>
      </div>
      <button className="main-arrow-right" onClick={handleNext}></button>
      <button className="main-arrow-left" onClick={handlePrev}></button>
    </section>
  );
};

export default Main;
