import React from "react";
import exampleDesign from "../img/home/home-about.jpeg";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="home-about__container container">
      <h5 className="home-about__sub-title sub-title">about</h5>
      <h2 className="home-about__title">
        “We're one of the best furniture agency. Prioritizing customers and
        making purchases easy are the hallmarks of our agency.”
      </h2>
      <div className="home-about__block">
        <div className="home-about__img">
          <img src={exampleDesign} alt="example design" />
          <div className="home-about__person">
            <img
              className="home-about__icon"
              src={`${process.env.PUBLIC_URL}/img/ArgaDanaan.svg`}
              alt="Arga Danaan"
            />
            <div className="home-about__info">
              <h6 className="home-about__name">Arga Danaan</h6>
              <h5 className="home-about__post">CEO of Dananz</h5>
            </div>
          </div>
        </div>
        <div className="home-about__content">
          <p className="home-about__text">
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere.
          </p>
          <Link className="blue-btn" to="about">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
