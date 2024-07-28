import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const handleBurger = () => {
    setOpenBurger(!openBurger);
  };

  if (openBurger && window.innerWidth < 1024) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/img/icons/logo.svg`}
            alt="icon"
          />
        </Link>
        <nav className={`header__nav ${openBurger ? "burger-is-open" : ""}`}>
          <ul className="header__list">
            <li className="header__item">
              <NavLink onClick={handleBurger} className="header__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                onClick={handleBurger}
                className="header__link"
                to="About"
              >
                About Us
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                onClick={handleBurger}
                className="header__link"
                to="Services"
              >
                Services
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                onClick={handleBurger}
                className="header__link"
                to="Teams"
              >
                Our Teams
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                onClick={handleBurger}
                className="header__link blue-btn"
                to="ContactUs"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <button onClick={handleBurger} className="header__burger burger">
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
