import React from "react";
import { Link } from "react-router-dom";
import material1 from "../img/home/home-material-1.jpeg";
import material2 from "../img/home/home-material-2.jpeg";
import material3 from "../img/home/home-material-3.jpeg";

const HomeMaterial = () => {
  return (
    <div className="home-material__container container">
      <div className="home-material__content">
        <h5 className="sub-title">material</h5>
        <h2 className="home-material__title">
          choice of materials for quality furniture.
        </h2>
        <p className="home-material__text">
          You can custom the material as desired. And our furniture uses the
          best materials and selected quality materials.
        </p>
        <Link className="home-material__link" to="#!">
          See Materials
        </Link>
        <img
          src={material1}
          alt="material"
          className="home-material__img-1 home-material__img"
        />
        <img
          src={material2}
          alt="material"
          className="home-material__img-2 home-material__img"
        />
        <img
          src={material3}
          alt="material"
          className="home-material__img-3 home-material__img"
        />
      </div>
    </div>
  );
};

export default HomeMaterial;
