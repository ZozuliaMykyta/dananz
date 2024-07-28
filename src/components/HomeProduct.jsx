import React from "react";
import { Link } from "react-router-dom";

const HomeProduct = () => {
  let productOffers = [
    {
      id: 1,
      title: "Vintage",
      desc: "the use of simple and limited elements to get the best effect or impression.",
    },
    {
      id: 2,
      title: "Minimalist",
      desc: "the use of simple and limited elements to get the best effect or impression.",
    },
    {
      id: 3,
      title: "Modern",
      desc: "the use of simple and limited elements to get the best effect or impression.",
    },
    {
      id: 4,
      title: "transitional",
      desc: "the use of simple and limited elements to get the best effect or impression.",
    },
  ];
  return (
    <div className="home-product__container container">
      <h5 className="sub-title">product</h5>
      <div className="home-product__top">
        <h2 className="home-product__title">Choose your product themes.</h2>
        <p className="home-product__text">
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </p>
      </div>
      <ul className="home-product__list">
        {productOffers.map((item) => (
          <li className="home-product__item" key={item.id}>
            <Link className="home-product__link" to="/services">
              <div className="home-product__offers">
                <span>{`0${item.id}`}</span>
                <h5 className="home-product__about">{item.title}</h5>
              </div>
              <p className="home-product__desc">{item.desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeProduct;
