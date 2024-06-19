import React, { useState } from "react";
import "./ServiceNav.css";
import { Link } from "react-router-dom";

export const ServiceNav = ({ servicePlan, setServicePlan }) => {
  const [servicePlanItem] = useState(["Personal", "Groupies", "Business", "Other"]);
  return (
    <div className="ServiceNav">
      <nav>
        <div className="serviceNavList">
          <ul>
                <Link to="/">
              <li>
                <box-icon name="home" type="solid" color="#00eeff"></box-icon>
                Home
              </li>
            </Link>
            {servicePlanItem.map((service) => {
              return (
                <>
                <li
                  style={{
                    color: servicePlan === service ? "goldenrod" : "#0ef",
                  }}
                  onClick={() => setServicePlan(service)}
                >
                  <box-icon name="user" type="solid" color="#00eeff"></box-icon>
                  {service}
                </li>
              </>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
