import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ProjectList from "../../components/ProjectList/ProjectList";
import "./Landing.scss";
import TobyIMG from "../../assets/images/toby.gif";
import menu from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

const Landing = () => {
  const [appMenu, setAppMenu] = useState(false);

  const showMenu = () => {
    setAppMenu(true);
  };

  const closeMenu = () => {
    setAppMenu(false);
  };

  return (
    <>
      <div className="landing">
        {appMenu && (
          <div className="header__menu">
            <div onClick={closeMenu} className="header__menu--close">
              <img className="header__menu--x" src={closeIcon} alt="Menu" />
            </div>

            <ul className="header__menu-items">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}

        {!appMenu && (
          <>
            <div className="header">
              <div>
                <img className="header__image" src={TobyIMG} alt="Toby" />
              </div>

              <div onClick={showMenu}>
                <img className="header__menu--icon" src={menu} alt="Menu" />
              </div>
            </div>
            <Hero />
            <ProjectList />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Landing;
