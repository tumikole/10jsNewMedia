import React, { useState } from "react";
import { Box, Heading, Image, Text, Flex, Button } from "@chakra-ui/react";
import "./About.css";
import First from "../../Asserts/day-clipart-photographer.png";
import Tumisang from "../../Asserts/Tumisang.jpg";
import "./About.scss";
import Navbar from "../Navbar/Navbar";

const AboutPage = () => {
  const [joinUs, setJoinUs] = useState(false)
  return (
    <>
      <Navbar />
      <div className="about_us_container">
        <div className="about_us">
          <h2 style={{ textAlign: "center" }}>OUR COMPANY</h2>
          <div className="mission">
            <span>MISSION</span>
            <p>
              Our mission is to transport your cargo with high speed and good
              quality.{" "}
            </p>
          </div>
          <br />
          <div className="mission">
            <span>Vission</span>
            <p>
              Our mission is to transport your cargo with high speed and good
              quality.{" "}
            </p>
          </div>
          <br />
          <div className="mission">
            <span>Value</span>
            <p>
              Our mission is to transport your cargo with high speed and good
              quality.{" "}
            </p>
          </div>
          <div className="company_info">
            <span>NAME</span>
            <p>
              Company’s name is come from a Chinese idiom stories: 擎天架海
              (Prop up the sky and wear the sea).{" "}
            </p>
          </div>
          <div className="company_info">
            <span>HISTORY</span>
            <p>
              Shanghai Sky-xing International Transportation Co., Ltd. has been
              established since 2005. We are an international freight forwarder
              offering import and export freight forwarding, specialized service
              for over 50 countries. We supply service base on Shanghai
              International Airpot. We cooperate with major cargo airlines and
              local companies to take care of your transportation needs at an
              acceptable rate.
            </p>
          </div>
          <div className="company_info">
            <span>OUR COMMITMENT</span>
            <p>
              Thank you for considering Shanghai Sky-xing International
              Transportation Co., Ltd. to provide your important transportation
              and logistics needs. Our vision and commitment to our customers is
              to deliver quality service and personal attention.
            </p>
          </div>
        </div>
        <div className="">
          <div class="circle-top"></div>
          <div class="circle-bottom"></div>
          <header>
            <div class="header-content">
              <span>company management</span>
              <h1>
                Meet a team of experts and innovators who are pioneers in their
                field
              </h1>
            </div>
          </header>
          <div className="our_team">
            <div class="joinCard-top">
              <h2>Join our team</h2>
              <button className="btn btn-primary" onClick={()=> setJoinUs(true)}>Join the amazing team</button>
              <div style={{display: joinUs ? "block" : "none"}}>
                <div class="joinContainer">
                  <div class="login">
                    <form action="">
                      <div class="input-box">
                        <input type="email" placeholder="Email" />
                      </div>

                      <div class="input-box">
                        <input type="text" placeholder="Firstname" />
                      </div>

                      <div class="input-box">
                        <input type="text" placeholder="Laststname" />
                      </div>
                      <div class="input-box">
                        <textarea placeholder="About" />
                      </div>
                      <button type="submit">Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="address">
            <span className="street">Main Office Address:</span>
            <span className="street">Pretoria</span>
            <span className="street">Jakalas</span>
            <span className="street">0001</span>
          </div>
          <div className="phone">
            <span>Phone: +27 000000000</span>
          </div>
          <div className="email">
            <span className="email">Ask your question by email</span>
            <a className="email" href="tenjs@gmail.com">
              <i className="icon-email"></i>tenjs@gmail.com
            </a>
          </div>
          <div className="copyright">
            <span>© 2023 copyright Ltd</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
