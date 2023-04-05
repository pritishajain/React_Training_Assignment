import React from "react";
import Title from "../common/title/title";
import NavBar from "../common/navBar";
import HomeCaraousel from "./home_caraousel";
import "../../assets/css/home.css";

const Home = () => {

  return (
    <React.Fragment>
      <Title />
      <NavBar />
      <HomeCaraousel />
    </React.Fragment>
  );
};

export default Home;
