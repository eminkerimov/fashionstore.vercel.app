import React from "react";
import Img1 from "../img/blog1.png";
import Img2 from "../img/blog2.png";
import Img3 from "../img/blog3.png";

const Blog = () => {
  const blog = [
    {
      img: Img1,
      date: 15,
      month: "MAR",
      title: "5 Must-Have Accessories for Spring",
      text: "Spring is here, and it's time to refresh your wardrobe! From statement earrings to colorful scarves, here are five must-have accessories to elevate your spring style.",
    },
    {
      img: Img2,
      date: 20,
      month: "MAR",
      title: "Trend Alert: Pastel Power",
      text: "Pastels are making a major comeback this season! Embrace the soft hues of lavender, mint, and blush to add a touch of elegance to your wardrobe. Whether it's a pastel blazer or a flowy dress, incorporate these dreamy tones for an effortlessly chic look.",
    },
    {
      img: Img3,
      date: 25,
      month: "MAR",
      title: "Denim Daze: Styling Tips for Denim Lovers",
      text: "Denim is a timeless classic that never goes out of style. Whether you're a fan of skinny jeans or prefer the relaxed fit of boyfriend jeans, there's a denim style for everyone. Check out our latest blog post for styling tips and outfit ideas to rock denim in all its glory.",
    },
  ];

  return (
    <section className="sector last">
      <div className="container">
        <div className="sector-title">
          <span>FROM THE BLOG</span>
        </div>
        <div className="row sector-rectangle">
          {blog.map((blog, index) => (
            <div
              className="rectangle-dress blog col-lg-4 col-md-6 col-12 mb-4"
              key={index}
            >
              <a href="#">
                <div className="calendar">
                  <img src={blog.img} />
                  <div className="blog-date">
                    <span>{blog.date}</span>
                    <span>{blog.month}</span>
                  </div>
                </div>
              </a>
              <h6>
                <a href="#">{blog.title}</a>
              </h6>
              <p>{blog.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
