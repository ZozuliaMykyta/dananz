import React from "react";
import kitchen from "../img/home/design-kitchen.jpeg";

const Design = () => {
  return (
    <div className="design__container container">
      <div className="design__content">
        <h1 className="design__title">
          Design your interor with high quality.
        </h1>
        <div className="design__info">
          <span>2022</span>
          <p>all right reserved</p>
        </div>
      </div>
      <div className="design__block">
        <div className="design__experience">
          <div className="design__item">
            <h2 className="design__number">350+</h2>
            <h6 className="design__sub-title">Project Completed</h6>
          </div>
          <div className="design__item">
            <h2 className="design__number">23+</h2>
            <h6 className="design__sub-title">Professional Teams</h6>
          </div>
          <div className="design__item">
            <h2 className="design__number">15+</h2>
            <h6 className="design__sub-title">Years Experience</h6>
          </div>
        </div>
        <img className="design__img" src={kitchen} alt="kitchen" />
      </div>
    </div>
  );
};

export default Design;
