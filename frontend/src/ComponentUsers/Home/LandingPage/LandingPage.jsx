import React from "react";
import "./LandingPage.css";
import Welcome from "../Welcome/Welcome";
import Navbar from "../../Navbar/Navbar";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import ClientPost from "../ClientPost/ClientPost";
import Footer from "../../Footer/Footer";

const LandingPage = ({setServicePlan}) => {
  return (
    <div className="landingPageContainer">
      <Navbar />
      <Welcome />
      <Gallery />
      <Services setServicePlan={setServicePlan}/>
      <ClientPost />
      <Footer/>
    </div>
  ); 
};

export default LandingPage;
