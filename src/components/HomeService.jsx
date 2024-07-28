import React from "react";
import HomeServiceImg from "../img/home/home-service.jpeg";
import { Link } from "react-router-dom";

const HomeService = () => {
  let offers = [
    {
      id: 1,
      title: "Interior Design",
    },
    {
      id: 2,
      title: "Consultant",
    },
    {
      id: 3,
      title: "Construction Consultant",
    },
  ];
  return (
    <div className="home-service__container container">
      <div className="home-service__content">
        <h5 className="sub-title">service</h5>
        <h2 className="home-service__title">
          attractive furniture with the best quality.
        </h2>
        <p className="home-service__text">
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
        <ul className="home-service__list">
          {offers.map((el) => (
            <li className="home-service__item" key={el.id}>
              <Link className="home-service__link" to="services">
                <span>{`0${el.id}`}</span>
                <p>{el.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="home-service__img">
        <img src={HomeServiceImg} alt="example design" />
      </div>
    </div>
  );
};

export default HomeService;
