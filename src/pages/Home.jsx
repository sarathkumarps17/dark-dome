// import { Container } from "@mui/material";
import React from "react";
import "../style/home.css";
import logo from "../assets/logo.png";
function Home({ id }) {
  return (
    <div id={id} className="home-container">
      <div className="hero-logo-container">
        <div class="scanner">
          <div class="fingarprint"></div>
          {/* <h3>Scanning ....</h3> */}
        </div>
        <img className="hero-logo" src={logo} alt="logo.png"></img>
      </div>
    </div>
  );
}

export default Home;
