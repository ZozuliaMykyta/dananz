import React from "react";
import Preview from "../components/Preview";
import previewImg from "../img/about/preview-img.jpeg";
import AboutAchievement from "../components/AboutAchievement";
import Service from "../components/Service";

const About = () => {
  let title = "About";
  let subTitle =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  return (
    <>
      <Preview title={title} subTitle={subTitle} img={previewImg} />
      <AboutAchievement />
      <Service />
    </>
  );
};

export default About;
