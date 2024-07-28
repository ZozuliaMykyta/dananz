import React from "react";
import { useForm } from "react-hook-form";
import Location from "../components/Location";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitData = () => {
    reset();
  };

  return (
    <>
      <div className="contactUs__container container">
        <h2 className="contactUs__title">Contact Us</h2>
        <p className="contactUs__text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <form className="contactUs__form" onSubmit={handleSubmit(onSubmitData)}>
          <div className="contactUs__form-cont">
            <div className="contactUs__input-cont contactUs__first-name">
              <p className="contactUs__desc">First Name</p>
              <input
                name="first-name"
                type="text"
                className=" contactUs__input"
                placeholder="First Name"
                {...register("firstName", {
                  required: true,
                  minLength: 3,
                })}
              />
              {errors.firstName && (
                <p className="contactUs__error">The field must be filled</p>
              )}
            </div>
            <div className="contactUs__input-cont contactUs__last-name">
              <p className="contactUs__desc">Last Name</p>
              <input
                name="last-name"
                type="text"
                className=" contactUs__input"
                placeholder="Last Name"
                {...register("lastName", {
                  required: true,
                  minLength: 3,
                })}
              />
              {errors.lastName && (
                <p className="contactUs__error">The field must be filled</p>
              )}
            </div>
            <div className="contactUs__input-cont contactUs__email">
              <p className="contactUs__desc">Email</p>
              <input
                name="email"
                type="email"
                className="contactUs__input"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  },
                })}
              />
              {errors.email && (
                <p className="contactUs__error">Incorrect email</p>
              )}
            </div>
            <div className="contactUs__input-cont contactUs__number">
              <p className="contactUs__desc">Phone Number</p>
              <div className="contactUs__number-cont">
                <input
                  name="phone-number"
                  type="tel"
                  className="contactUs__input"
                  placeholder="Phone Number"
                  {...register("phoneNumber", {
                    required: true,
                    pattern: {
                      value:
                        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                    },
                  })}
                />
                <select className="contactUs__select" name="country">
                  <option value="US">us</option>
                  <option value="UK">uk</option>
                </select>
              </div>
              {errors.phoneNumber && (
                <p className="contactUs__error">Incorrect phone number</p>
              )}
            </div>
            <div className="contactUs__input-cont contactUs__message">
              <p className="contactUs__desc">Message</p>
              <textarea
                name="message"
                className=" contactUs__input"
                placeholder="Your Message"
                {...register("yourMessage", {
                  required: true,
                  minLength: 2,
                })}
              ></textarea>
              {errors.yourMessage && (
                <p className="contactUs__error">The field must be filled</p>
              )}
            </div>
          </div>
          <button type="submit" className="contactUs__btn blue-btn">
            Send Massage
          </button>
        </form>
      </div>
      <Location />
    </>
  );
};

export default ContactUs;
