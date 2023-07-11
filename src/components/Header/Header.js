import "./Header.scss";
import TobyIMG from "../../assets/images/toby.gif";
import menu from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

import { useState } from "react";

const Header = () => {
  const [appMenu, setAppMenu] = useState(false);

  const showMenu = () => {
    setAppMenu(true);
  };

  const closeMenu = () => {
    setAppMenu(false);
  };

  return (
    <>
      {appMenu && (
        <div className="header__menu">
          <div onClick={closeMenu} className="header__menu--close">
            <img className="header__menu--x" src={closeIcon} alt="Menu" />
          </div>

          <div className="header__menu-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </div>
      )}

      <div className="header">
        <div>
          <img className="header__image" src={TobyIMG} alt="Toby" />
        </div>

        <div onClick={showMenu}>
          <img className="header__menu--icon" src={menu} alt="Menu" />
        </div>
      </div>
    </>
  );
};

export default Header;
