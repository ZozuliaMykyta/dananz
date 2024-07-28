import React from "react";
import Preview from "../components/Preview";
import HomeProduct from "../components/HomeProduct";
import previewImg from "../img/services/preview-img.jpeg";
import ServicesAchievement from "../components/ServicesAchievement";

const Services = () => {
  let title = "Services";
  let subTitle =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  return (
    <>
      <Preview title={title} subTitle={subTitle} img={previewImg} />
      <ServicesAchievement />
      <HomeProduct />
    </>
  );
};

export default Services;
