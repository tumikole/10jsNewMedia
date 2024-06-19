import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Services.css";

const Services = ({setServicePlan}) => {
  const [serviceAndPrice, setServiceAndPrice] = useState([]);
  const [spinnerContent] = useState("services");

  useEffect(() => {
    const getAllServices = async () => {
      if (serviceAndPrice.length <= 0) {
        const res = await axios.get("http://localhost:4000/get_all_services");
        setServiceAndPrice(res.data.data);
      }
    };
    return () => {
      getAllServices();
    };
  });
  const lastFourServices = serviceAndPrice.slice(-4);

  return (
    <div className="homeServices">

      <div class="pricing-tables">
        <h1 className="homePageTitle">Services</h1>
        <div className="pricing-sub">
          <h3>
            10JS Media production offers a broad range of service packages.
            They’re designed to meet your specific personal and/or business
            requirements, and are priced to accommodate every budget. Browse the
            options below, and then select the one that that best suits your
            needs
          </h3>
          {/* <h4>
            Remember: you can always edit or upgrade your selection at a later
            stage.
          </h4> */}
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="pricing-table">
                <h3 class="title">Personal</h3>
                <div class="price-value">
                  {" "}
                  <span class="price-title">Per shoot</span>{" "}
                  <span class="price">
                    {" "}
                    <span class="currency">R</span>{" "}
                    <span class="value">10</span>{" "}
                    <span class="value-small">99</span>{" "}
                  </span>
                </div>
                <ul class="pricing-content">
                  <li>
                    <strong>1GB</strong> Disk Space
                  </li>
                  <li>
                    <strong>10</strong> Email Accounts
                  </li>
                  <li>
                    <strong>10GB</strong> Monthly Bandwidth
                  </li>
                  <li>
                    <strong>1</strong> Website
                  </li>
                  <li>
                    <strong>24/7</strong> Support
                  </li>
                </ul>
                <Link to="ServicesAndPricingPage" class="pricing-table-button" onClick={(()=> setServicePlan("Personal"))}>
                  Select plan for personal
                </Link>{" "}
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="pricing-table">
                <h3 class="title">Groupies</h3>
                <div class="price-value">
                  {" "}
                  <span class="price-title">per month</span>{" "}
                  <span class="price">
                    {" "}
                    <span class="currency">R</span>{" "}
                    <span class="value">20</span>{" "}
                    <span class="value-small">99</span>{" "}
                  </span>
                </div>
                <ul class="pricing-content">
                  <li>
                    <strong>50GB</strong> Disk Space
                  </li>
                  <li>
                    <strong>50</strong> Email Accounts
                  </li>
                  <li>
                    <strong>50GB</strong> Monthly Bandwidth
                  </li>
                  <li>
                    <strong>5</strong> Websites
                  </li>
                  <li>
                    <strong>24/7</strong> Support
                  </li>
                </ul>
                <Link to="ServicesAndPricingPage" class="pricing-table-button" onClick={(()=> setServicePlan("Groupies"))}>
                Select plan for groupies
                </Link>{" "}
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="pricing-table">
                <h3 class="title">Business</h3>
                <div class="price-value">
                  {" "}
                  <span class="price-title">per month</span>{" "}
                  <span class="price">
                    {" "}
                    <span class="currency">R</span>{" "}
                    <span class="value">50</span>{" "}
                    <span class="value-small">99</span>{" "}
                  </span>
                </div>
                <ul class="pricing-content">
                  <li>
                    <strong>1000GB</strong> Disk Space
                  </li>
                  <li>
                    <strong>Unlimited</strong> Email Accounts
                  </li>
                  <li>
                    <strong>Unlimited</strong> Bandwidth
                  </li>
                  <li>
                    <strong>20</strong> Websites
                  </li>
                  <li>
                    <strong>24/7</strong> Support
                  </li>
                </ul>
                <Link to="ServicesAndPricingPage" class="pricing-table-button" onClick={(()=> setServicePlan("Business"))}>
                Select plan for business
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
