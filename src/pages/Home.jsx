// import { Container } from "@mui/material";
import React from "react";
import Logo from "../components/Logo";
import "../style/home.css";
function Home({ id }) {
  return (
    <div id={id} className="home-container">
      <div className="hero-logo-container">
        <div class="scanner">
          <div class="fingarprint"></div>
          {/* <h3>Scanning ....</h3> */}
        </div>
        <Logo className="hero-logo" />
      </div>
    </div>
  );
}

export default Home;
