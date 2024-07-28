import React from "react";

const Location = () => {
  return (
    <div className="location__container container">
      <h5 className="sub-title">location</h5>
      <div className="location__block">
        <div className="location__info">
          <h3 className="location__title">Visit Our Stores</h3>
          <h6 className="location__desc">Find us at these locations.</h6>
          <div className="location__email">
            <h4 className="location__sub-title">Email</h4>
            <h6 className="location__desc">dananz@gmail.com</h6>
          </div>
          <div className="location__number">
            <h4 className="location__sub-title">Phone</h4>
            <h6 className="location__desc">+62 815 002 1000</h6>
          </div>
        </div>
        <div className="location__content">
          <div className="location__item">
            <h4 className="location__sub-title">Jakarta</h4>
            <p className="location__text">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
          <div className="location__item">
            <h4 className="location__sub-title">Surakarta</h4>
            <p className="location__text">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
          <div className="location__item">
            <h4 className="location__sub-title">Yogyakarta</h4>
            <p className="location__text">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
          <div className="location__item">
            <h4 className="location__sub-title">Bandung</h4>
            <p className="location__text">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
