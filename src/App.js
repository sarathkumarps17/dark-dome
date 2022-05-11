// import { Router, Switch, Route } from "react-router-dom";
import React from "react";
// import history from "./history";
import Home from "./pages/Home";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Feeds from "./pages/Feeds";
import InformUs from "./pages/InformUs";
import "./style/pages.css";
import { Divider, Chip } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/inform_us" component={InformUs} />
          <Route exact path="/about_us" component={AboutUs} />
          <Route exact path="/contact_us" component={ContactUs} />
          <Route exact path="/feeds" component={Feeds} />
        </Switch> */}
      <Home id={"home"} />
      <Divider>
        <Chip label="About Us" />
      </Divider>
      <AboutUs id={"about_us"} />
      <Divider>
        <Chip label="Inform Us" />
      </Divider>
      <InformUs id={"inform_us"} />
      <Divider>
        <Chip label="Feeds" />
      </Divider>
      <Feeds id={"feeds"} />
      <Divider>
        <Chip label="Contact Us" />
      </Divider>
      <ContactUs id={"contact_us"} />
      <Footer />
    </div>
  );
}

export default App;
