import React from "react";
import "./OtherServices.scss";
import Spinner from "../../../Spinners/Spinner";

function OtherServices({ serviceAndPrice }) {
  return (
    <div className="userServices">
      <h1 className="title">Other services</h1>
      {serviceAndPrice.length <= 0 ? (
        <Spinner spinnerContent={"other services"}/>
      ) : (
        <div className="card-container">
          {serviceAndPrice.map((serviceItem) => {
            const createdAtDate = new Date(serviceItem.created_at);
            const formattedDate = createdAtDate.toLocaleString();

            return (
              <div className="card" key={serviceItem.id}>
                <div className="card-title">{serviceItem.title}</div>
                <div className="card-content">
                  <ul>
                    {serviceItem.service_list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="price">{serviceItem.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default OtherServices;
