import React from "react";
import Design from "../components/Design";
import HomeAbout from "../components/HomeAbout";
import HomeService from "../components/HomeService";
import HomeProduct from "../components/HomeProduct";
import HomeMaterial from "../components/HomeMaterial";

const Homepage = () => {
  return (
    <>
      <Design />
      <HomeAbout />
      <HomeService />
      <HomeProduct />
      <HomeMaterial />
    </>
  );
};

export default Homepage;
