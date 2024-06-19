import React from "react";
import "./Business.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

export const Business = () => {
  return (
    <div className="business">
      <section id="header">
        <div className="row" style={{ width: "80%", margin: "auto" }}>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h1>
              <span>Pricing plans for your business</span>
            </h1>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6"
            style={{ borderLeft: "1px solid dodgerblue", paddingLeft: "7%" }}
          >
            <div>
              <p style={{ lineHeight: "2" }}>
               10JS Media production flexible pricing plans are based on the needs of your
                healthcare facility and providers. We offer monthly or annual
                pricing packages per provider, giving you the ability to easily
                customize your plan. Start your free 30-day trial today and we
                will build a pricing plan that best fits your specific needs.
              </p>
            </div>
            <div>
              <button className="dark">CALL US</button>
              <button className="aqua">REQUEST A CALL</button>
            </div>
          </div>
        </div>
      </section>

      <section id="plan">
        <h4 className="planHeader">
          CHOOSE THE RIGHT PLAN FOR YOU
        </h4>
        <div className="row">
          <div className="col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title">CLINICS</h2>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-linear">
                  FIND OUT MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title">SURGERY CLINICS</h2>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-linear">
                  FIND OUT MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title">HOSPITALS</h2>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-linear">
                  FIND OUT MORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <p style={{ textAlign: "center", color: "gray" }}>
          *Monthly and Annual Plans available
        </p>
        <br />
        <br />
      </section>

      {/* <section id="conclusion">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h2 style={{ color: "rgb(1, 9, 54)", fontWeight: "bolder" }}>
              10JS Media Production
            </h2>
            <p>&copy; 2024 10JS Media Production, Inc.</p>
          </div>
          <div className="col-lg-6 col-md-6">
            <footer>
              <table>
                <tr>
                  <th>10JS Media Production</th>
                  <th>ABOUT</th>
                  <th>CONTACT</th>
                </tr>
                <tr>
                  <td>Features</td>
                  <td>About Us</td>
                  <td>Request Demo</td>
                </tr>
                <tr>
                  <td>Solutions</td>
                  <td>Privacy Policy</td>
                  <td>15-Day Trial</td>
                </tr>
                <tr>
                  <td>
                    <span className="active">Pricing</span>
                  </td>
                  <td>Terms of Use</td>
                </tr>
                <tr>
                  <td>Success Stories</td>
                </tr>
              </table>
            </footer>
          </div>
        </div>
      </section> */}
    </div>
  );
};
