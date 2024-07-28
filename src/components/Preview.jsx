import React from "react";

const Preview = ({ title, subTitle, img }) => {
  return (
    <div className="preview__container container">
      <h2 className="preview__title">{title}</h2>
      <h6 className="preview__sub-title">{subTitle}</h6>
      <img src={img} alt="preview" className="preview__img" />
    </div>
  );
};

export default Preview;
