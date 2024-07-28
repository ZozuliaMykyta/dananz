import React from "react";

const Service = () => {
  return (
    <div className="service__container container">
      <h5 className="sub-title">service</h5>
      <h2 className="service__title">Why Choose Us</h2>
      <p className="service__text">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <div className="service__block">
        <ul className="service__list">
          <li className="service__item">
            <div className="service__img"></div>
            <h6 className="service__info">High Quality</h6>
            <p className="service__desc">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </li>
          <li className="service__item">
            <div className="service__img"></div>
            <h6 className="service__info">Professional Designer</h6>
            <p className="service__desc">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </li>
          <li className="service__item">
            <div className="service__img"></div>
            <h6 className="service__info">The Best Services</h6>
            <p className="service__desc">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service;
