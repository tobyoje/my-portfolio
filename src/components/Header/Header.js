import "./Header.scss";
import TobyIMG from "../../assets/images/toby.gif";
import menu from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
        <Link to="/">   <img className="header__image" src={TobyIMG} alt="Toby" /> </Link>
        </div>

<div>

  
</div>

        <div className="header__menu-container">
          <a href="/#projects">
            <li>Works</li>
          </a>

          <a href="/#contact">
            <li>Contact</li>
          </a>
        </div>






      </div>
    </>
  );
};

export default Header;
