import React from "react";
import personImg1 from "../img/teams/designer-person-1.jpeg";
import personImg2 from "../img/teams/designer-person-2.jpeg";
import personImg3 from "../img/teams/designer-person-3.jpeg";
import personImg4 from "../img/teams/designer-person-4.jpeg";
import personImg5 from "../img/teams/designer-person-5.jpeg";
import personImg6 from "../img/teams/designer-person-6.jpeg";
import personImg7 from "../img/teams/designer-person-7.jpeg";
import personImg8 from "../img/teams/designer-person-8.jpeg";

const Designer = () => {
  let people = [
    {
      id: 1,
      img: personImg1,
      name: "Shoo Phar Dhie",
      post: "CEO",
    },
    {
      id: 2,
      img: personImg2,
      name: "Shoo Phar Dhie",
      post: "CEO",
    },
    {
      id: 3,
      img: personImg3,
      name: "Shoo Phar Dhie",
      post: "CEO",
    },
    {
      id: 4,
      img: personImg4,
      name: "Shoo Phar Dhie",
      post: "CEO",
    },
    {
      id: 5,
      img: personImg5,
      name: "Shoo Phar Dhie",
      post: "CEO",
    },
    {
      id: 6,
      img: personImg6,
      name: "Shoo Phar Dhie",
      post: "CEO",
    },

    {
      id: 7,
      img: personImg7,
      name: "Shoo Phar Dhie",
      post: "CEO",
    },
    {
      id: 8,
      img: personImg8,
      name: "Shoo Phar Dhie",
      post: "CEO",
    },
  ];
  return (
    <div className="designer__container container">
      <h5 className="sub-title">designer</h5>
      <h2 className="designer__title">Creative Person</h2>
      <p className="designer__text">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <div className="designer__block">
        {people.map((el) => (
          <div className="designer__item" key={el.id}>
            <img src={el.img} alt={el.name} className="designer__img" />
            <div className="designer__content">
              <h4 className="designer__name">{el.name}</h4>
              <h6 className="designer__post">{el.post}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designer;
