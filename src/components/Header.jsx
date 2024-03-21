import React from "react";
import Logo from "../img/logo.png";

const Header = ({ toggleMobile }) => {
  return (
    <header>
      <div className="top-header">
        <ul className="top-header-ul">
          <li>
            <a href="#">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span>SHIPPING On All Order</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-money" aria-hidden="true"></i>
              <span>Back Guarantee</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span>OnlIne Support 24/7</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mid-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <a className="logo" href="#">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <div className="col-md-6">
              <form>
                <input type="search" placeholder="Search" />
                <span className="vertical-hr"></span>
                <select>
                  <option value="">All Categories</option>
                  <option value="">Apparel</option>
                  <option value="">Footwear</option>
                  <option value="">Sportswear</option>
                  <option value="">Traditional</option>
                  <option value="">Formal Wear</option>
                  <option value="">Accessories</option>
                  <option value="">Watches & Jewelry</option>
                  <option value="">Luggage</option>
                </select>
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div className="col-md-3 social">
              <ul className="social-ul">
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
          </div>
        </div>
      </div>
      <div className="menu-header">
        <div className="container">
          <div className="menu-header-block">
            <button onClick={toggleMobile} className="mobile">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="menu-header-block-ul">
              <li>
                <a href="#">HOME</a>
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
            <a href="#" className="menu-header-block-cart">
              <p>Shopping cart</p>
              <p>(0)</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
