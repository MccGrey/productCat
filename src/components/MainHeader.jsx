import React from "react";
import { Link } from "react-router-dom";
import IMG from "../images/main_header.png";

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>100daysOfWorkOut</h4>
          <h1>join the legends of fitness world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur, facere.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={IMG} alt="main header image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
