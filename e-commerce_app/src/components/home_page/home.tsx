import React from "react";
import Title from "../title_section/title";
import NavBar from "../navbar_section/navBar";
import HomeCaraousel from "./home_caraousel";
import "../../assets/css/home.css";

const Home = () => {

  return (
    <React.Fragment>
      <HomeCaraousel />     
    </React.Fragment>
  );
};

export default Home;
