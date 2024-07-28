import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Footer = () => {
  const {
    register,
    setError,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!data.newsEmail) {
      setError("newsEmail", {
        type: "manual",
        message: "Field cannot be empty",
      });
      return;
    }
    reset();
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__discuss">
          <div className="container">
            <h2 className="footer__discuss-title">
              let's discuss making your interior like a dream place!
            </h2>
            <div className="footer__discuss-contact">
              <p className="footer__discuss-text">
                Contact us below to work together to build your amazing interior
              </p>
              <Link to="contactus" className="footer__discuss-link">
                Contact US
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__about">
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/logo.svg`}
                  alt="logo"
                />
              </Link>
              <h2 className="footer__sub-title">
                One of the best furniture agency.
              </h2>
            </div>
            <div className="footer__news">
              <p className="footer__sub-email">
                Enter your email to get the laterst news
              </p>
              <form className="footer__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="footer__email">
                  <input
                    className="footer__email-input"
                    type="email"
                    placeholder="Email Address"
                    {...register("newsEmail", {
                      required: false,
                      pattern: {
                        value: /^\S+@\S+$/i,
                      },
                    })}
                  />
                  <button className="footer__arrow" type="submit">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/icons/footer-arrow.svg`}
                      alt="arrow"
                    />
                  </button>
                </div>
                {errors.newsEmail && (
                  <p className="footer__email-error">
                    {errors.newsEmail.message}
                  </p>
                )}
              </form>
              <div className="footer__follow">
                <h5 className="footer__follow-title">Follow us On</h5>
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link to="#!">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/icons/footer-icon-facebook.svg`}
                        alt="facebook"
                      />
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link to="#!">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/icons/footer-icon-instagram.svg`}
                        alt="instagram"
                      />
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link to="#!">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/icons/footer-icon-tiktok.svg`}
                        alt="tiktok"
                      />
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link to="#!">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/icons/footer-icon-youtube.svg`}
                        alt="youtube"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
