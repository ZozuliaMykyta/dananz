import React from "react";
import achievement from "../img/about/achievement-img.jpeg";

const AboutAchievement = () => {
  return (
    <div className="about-achievement__container container">
      <h5 className="sub-title">achievement</h5>
      <h2 className="about-achievement__title">
        interior customization with Danaanz, best quality with professional
        workers
      </h2>
      <div className="about-achievement__content">
        <div>
          <img
            className="about-achievement__img"
            src={achievement}
            alt="interior"
          />
        </div>
        <div className="about-achievement__experience">
          <div className="about-achievement__item">
            <h2 className="about-achievement__number">350+</h2>
            <h6 className="about-achievement__sub-title">Project Completed</h6>
          </div>
          <div className="about-achievement__item">
            <h2 className="about-achievement__number">23+</h2>
            <h6 className="about-achievement__sub-title">Professional Teams</h6>
          </div>
          <div className="about-achievement__item">
            <h2 className="about-achievement__number">15+</h2>
            <h6 className="about-achievement__sub-title">Years Experience</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAchievement;
