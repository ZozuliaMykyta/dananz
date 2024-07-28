import React from "react";
import Preview from "../components/Preview";
import previewImg from "../img/teams/preview-img.jpeg";
import Designer from "../components/Designer";
import Service from "../components/Service";

const Teams = () => {
  let title = "Our Teams";
  let subTitle =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  return (
    <>
      <Preview title={title} subTitle={subTitle} img={previewImg} />
      <Designer />
      <Service />
    </>
  );
};

export default Teams;
