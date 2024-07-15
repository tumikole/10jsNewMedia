import React from "react";
import "./Team.css";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Img1 from "../../Asserts/teamsideone.webp";
import Img2 from "../../Asserts/teamsidetwo.webp";

function Team() {
  return (
    <div className="meetOurTeamContainer">
      <Navbar />
      <div className="meetOurTeamHeaderContainer">
        <div className="meetOurTeamHeaderWrapper">
          <h1>Meet the team</h1>
          <div className="aboutOurTeam">
            <div>
              <span className="first">
                At{" "}
                <span style={{ color: "goldenrod" }}>
                  10JS Media Production
                </span>
                , our team of talented photographers and media production
                experts are dedicated to capturing the essence of every moment
                and bringing stories to life through the lens. With a keen eye
                for detail and a passion for visual storytelling, we strive to
                create compelling and impactful imagery that resonates with our
                audience.
              </span>
              <img src={Img1} alt="" />
            </div>
            <br />
            <br />
            <div>
              <img src={Img2} alt="" />
              <span className="second">
                From conceptualizing creative ideas to executing flawless photo
                shoots and video productions, our team combines technical
                expertise with artistic flair to deliver stunning visual content
                that exceeds expectations. Whether it's a corporate event, a
                product launch, a portrait session, or a promotional video, we
                are committed to providing top-notch photography and media
                production services that leave a lasting impression.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="teamMemberContainer">
        <div class="container">
          {/* <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="profile-card">
                <div class="profile-img">
                  <img
                    src="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
                    alt="Team Image"
                  />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Thabang
                    <span>Founder, Photographer, Editor, etc</span>
                  </h2>
                  <ul class="social-link">
                    <li>
                      <box-icon
                        name="facebook"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <li>
                      <box-icon
                        name="whatsapp"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <li>
                      <box-icon
                        name="twitter"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <li>
                      <box-icon
                        name="instagram"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <p className="userInfo">Info</p>
                    <p>
                      Thabang, the CEO and founder, embodies strong leadership and
                      entrepreneurial spirit. With a clear vision and strategic
                      direction, Thabang guides the team towards achieving its
                      goals and objectives. Their experience and expertise in
                      business management provide valuable insights that drive the
                      organization's growth and success. Thabang's ability to make
                      tough decisions and navigate challenges with resilience
                      inspires confidence among team members, fostering a culture
                      of innovation and excellence. By setting high standards and
                      fostering a collaborative work environment, Thabang ensures
                      that the team operates cohesively towards a common purpose,
                      making them a driving force behind the organization's
                      success.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="profile-card">
                <div class="profile-img">
                  <img
                    src="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
                    alt="Team Image"
                  />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Tumisang
                    <span>Full-stack web developer</span>
                  </h2>
                  <ul class="social-link">
                    <li>
                      <box-icon
                        name="facebook"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <li>
                      <box-icon
                        name="whatsapp"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <li>
                      <box-icon
                        name="twitter"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <li>
                      <box-icon
                        name="instagram"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <p className="userInfo">Info</p>
                    <p>
                      {" "}
                      Tumisang, the team's web developer, is a tech-savvy
                      professional with a passion for creating seamless digital
                      experiences. With expertise in coding languages and web
                      development tools, Tumisang translates ideas into functional
                      and user-friendly websites. Their attention to detail and
                      problem-solving skills enable them to optimize the
                      performance of digital platforms and troubleshoot technical
                      issues effectively. Tumisang's commitment to staying updated
                      on the latest trends in web development and their creative
                      approach to design make them a valuable asset to the team.
                      By combining technical proficiency with a keen eye for
                      aesthetics, Tumisang contributes to the team's ability to
                      deliver innovative digital solutions that enhance user
                      experience and drive engagement.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="profile-card">
                <div class="profile-img">
                  <img
                    src="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
                    alt="Team Image"
                  />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Lilly
                    <span>
                      {" "}
                      Actress, musician, songwriter and artist. PM for work
                      inquires{" "}
                    </span>
                  </h2>
                  <ul class="social-link">
                    <li>
                      <box-icon
                        name="facebook"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <li>
                      <box-icon
                        name="whatsapp"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <li>
                      <box-icon
                        name="twitter"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <li>
                      <box-icon
                        name="instagram"
                        type="logo"
                        color="#00eeff"
                      ></box-icon>
                    </li>
                    <p className="userInfo">Info</p>
                    <p>
                      Lilly, the marketing expert on the team, brings a wealth of
                      knowledge and experience in consumer behavior and market
                      trends With a keen understanding of the target audience,
                      Lilly plays a crucial role in developing effective marketing
                      strategies that elevate the team's visibility and impact.
                      Their strategic approach to branding and promotion helps the
                      team reach a wider audience and build strong relationships
                      with customers. Lilly's creativity and innovative thinking
                      bring fresh perspectives to marketing campaigns, ensuring
                      that the team stays ahead of the competition and resonates
                      with the target market. By leveraging data and analytics,
                      Lilly is able to track the performance of marketing
                      initiatives and make data-driven decisions to optimize
                      results. Their ability to adapt to changing market dynamics
                      and consumer preferences allows the team to stay agile and
                      responsive in a competitive landscape. Lilly's collaborative
                      spirit and strong communication skills enable them to work
                      effectively with team members across different functions,
                      ensuring that marketing efforts are aligned with the overall
                      goals of the organization. With a passion for driving growth
                      and creating impactful brand experiences, Lilly plays a
                      vital role in shaping the team's marketing strategy and
                      driving business success.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="teamSection">
        <section>
          {/* <span>meet our</span> */}
          <h2>Team</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, praesentium veritatis voluptatibus ut consequuntur quas consequatur omnis id rem obcaecati.</p>
          <span class="bg-watermark">team</span>
          <div class="cards">
            <div class="card">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Franklin Carlson" />
              <div class="card-content">
                <h3>Thabang</h3>
                <p>UX Designer</p>
                <ul>
                  <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="card">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Antonia Moore" />
              <div class="card-content">
                <h3>antonia moore</h3>
                <p>product designer</p>
                <ul>
                  <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Travis Lynch" />
              <div class="card-content">
                <h3>Tumisang</h3>
                <p>web developer</p>
                <ul>
                  <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Team;
