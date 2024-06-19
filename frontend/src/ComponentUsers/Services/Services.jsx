import React, {useState, useEffect} from "react";
import "./Servces.css";
import { Personal } from "./Personal/Personal";
import { Business } from "./Business/Business";
import { Groupies } from "./Groupies/Groupies";
import { ServiceNav } from "./ServiceNav/ServiceNav";
import OtherServices from "./OtherServices/OtherServices";
import Footer from "../Footer/Footer";
import axios from "axios";

const Services = ({ servicePlan, setServicePlan }) => {

  const [serviceAndPrice, setServiceAndPrice] = useState([]);
  
  useEffect(() => {
      if (servicePlan === "Other" && serviceAndPrice.length <= 0) {
        getAllServices();
    }
    return () => {
      getAllServices();
    };
  }, [serviceAndPrice]);

  const getAllServices = async () => {
      const res = await axios.get("http://localhost:4000/get_all_services");
      setServiceAndPrice(res.data.data);
  };
  return (
    <div className="serviceAndPricing">
      <ServiceNav setServicePlan={setServicePlan} servicePlan={servicePlan} />
      <div className="servicePlans">
        {servicePlan === "Personal" ? (
          <Personal />
        ) : servicePlan === "Business" ? (
          <Business />
        ) : servicePlan === "Groupies" ? (
          <Groupies />
        ) : (
          <OtherServices serviceAndPrice={serviceAndPrice}/>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
