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
  return (
    <>
      <div>
        <Hero />
        <ProjectList />
      </div>
    </>
  );
};

export default Landing;
