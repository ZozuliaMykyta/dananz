import React from "react";
import achievementImg1 from "../img/services/achievement-img-1.jpeg";
import achievementImg2 from "../img/services/achievement-img-2.jpeg";
import achievementImg3 from "../img/services/achievement-img-3.jpeg";

const ServicesAchievement = () => {
  let achievementItems = [
    {
      id: 1,
      img: achievementImg1,
      title: "Interior design",
      text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    {
      id: 2,
      img: achievementImg2,
      title: "Consultant",
      text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    {
      id: 3,
      img: achievementImg3,
      title: "construction consultant",
      text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
  ];
  return (
    <div className="services-achiv__container container">
      <h5 className="sub-title">achievement</h5>
      <div className="services-achiv__block">
        {achievementItems.map((el) => (
          <div className="services-achiv__item" key={el.id}>
            <div className="services-achiv__img">
              <img src={el.img} alt="our achievemnt" />
            </div>
            <div className="services-achiv__content">
              <h4 className="services-achiv__title">{el.title}</h4>
              <p className="services-achiv__text">{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAchievement;
