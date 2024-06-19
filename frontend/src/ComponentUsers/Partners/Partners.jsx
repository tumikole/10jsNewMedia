import React from "react";
import "./Partners.css";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  return (
    <section className="hero">
      <div>
        <h1>Catchy headline here for sure</h1>
        <button className="hero-button">Call to action</button>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  return (
    <section className="partners">
      <h3>Our Clients</h3>
      <div className="partners-img-container">
        <div className="partners-img"></div>
      </div>
    </section>
  );
};

function Partners() {
  return (
    <div className="partnersContainer">
      <div className="container">
        <Navbar />
        <HeroSection />
        <PartnersSection />
      </div>
    </div>
  );
}

export default Partners;
