import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3">
            <a className="footer-logo" href="index.html">
              <img src={Logo} alt="logo" />
            </a>
            <div className="footer-about">
              <p>
                Welcome to our fashion-forward online store, where style meets
                convenience and trends are just a click away! Explore our
                curated collection of chic apparel, accessories, and footwear
                designed to elevate your wardrobe effortlessly.
              </p>
            </div>
          </div>
          <div className="col-md-9">
            <div className="footer-info">
              <div className="top-part">
                <h5>SIGN UP FOR OUR NEWSLETTER !</h5>
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="hello@psdfreebies.com"
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="bottom-part">
                <ul className="footer-menu row">
                  <li className="col-sm-4 col-md-6 col-lg-4">
                    <ul className="footer-menu-ul">
                      <span>INFORMATION</span>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Investor Relations</a>
                      </li>
                      <li>
                        <a href="#">Press Releases</a>
                      </li>
                      <li>
                        <a href="#">Shop with Points</a>
                      </li>
                    </ul>
                  </li>
                  <li className="col-sm-4 col-md-6 col-lg-4">
                    <ul className="footer-menu-ul">
                      <span>CUSTOMER CARE</span>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                      <li>
                        <a href="#">Shipping Info</a>
                      </li>
                      <li>
                        <a href="#">Gift Cards</a>
                      </li>
                      <li>
                        <a href="#">Size Guide</a>
                      </li>
                    </ul>
                  </li>
                  <li className="col-sm-4 col-md-12 col-lg-4">
                    <ul className="footer-menu-last">
                      <span>STORE INFORMATION</span>
                      <li>
                        <a href="#">
                          address: Lorem ipsum dolor sit amet.Onsectetuer
                          adipiscing elit.
                        </a>
                      </li>
                      <li>
                        <a href="mailto:demo@posthemes.com">
                          email: demo@posthemes.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:0987.654.321">phone: 0987.654.321</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="copyright">
              <p>© 2015 Psdfreebies. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
