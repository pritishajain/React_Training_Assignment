import React from "react";
import Title from "../title_section/title";
import NavBar from "../navbar_section/navBar";
import HomeCaraousel from "./home_caraousel";
import "../../assets/css/home.css";
import Footer from "./footer";

const Home = () => {

  return (
    <React.Fragment>
      <Title />
      <NavBar />
      <HomeCaraousel />
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
