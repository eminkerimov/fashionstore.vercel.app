import React from "react";

const Link = () => {
  return (
    <section className="quick-link">
      <div className="container">
        <ul className="quick-link-ul">
          <li>
            <a href="">Go quickly</a>
          </li>
          <select>
            <option value="All Categories">All Categories</option>
            <option value="">Women</option>
            <option value="">Men</option>
            <option value="">Accessories</option>
            <option value="">Fashion</option>
            <option value="">Features</option>
            <option value="">Clothings</option>
            <option value="">Bags and Wallets</option>
            <option value="">Fragrances</option>
            <option value="">Caps & Hats</option>
          </select>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
          <li>
            <a href="">Fashion</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Clothings</a>
          </li>
          <li>
            <a href="">Bags and Wallets</a>
          </li>
          <li>
            <a href="">Fragrances</a>
          </li>
          <li>
            <a href="">Caps & Hats</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Link;
