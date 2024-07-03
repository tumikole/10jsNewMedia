import React, { useState } from "react";
import "./Home.scss";
import axios from "axios";
import Alerts from "../Alerts/Alerts";

const Home = ({
  adminAvatar,
  adminName,
  adminLastName,
  adminRole,
  adminPermissions,
  client_code_verified,
  adminEmail
}) => {
  const [clientCode, setClientCode] = useState("");
  const [successMessage, setSuccesMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);


  

  

  const url = "http://localhost:4000/";

  const setVerificationClientCode = async () => {
    const userInfo = {adminEmail, clientCode}
    const res = await axios.post(`${url}verify_client_code`, userInfo);
    console.log({res,userInfo})

    if(res.data.codeMatched === false){
      setErrorMessage(res.data.message)
    }else{
      setSuccesMessage(res.data.message)
      const clientUser = localStorage.getItem("user");
        if (clientUser) {
          try {
            const clientUserData = JSON.parse(clientUser);
            clientUserData.client_code_verified = true;
            localStorage.setItem("user", JSON.stringify(clientUserData));
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        }

    }
  };

  return (
    <div className="adminHome">
      <div className="homeHeader">
        <h1>
          Welcome back {adminName} {adminLastName}
        </h1>
      </div>
      <div className="homeBody">
        <h3>
          You logged in as <u>{adminRole}</u> role
        </h3>
        <h2>Permissions</h2>
        <div className="permissions">
          {adminPermissions &&
            adminPermissions.map((item) => {
              return <p>{item}</p>;
            })}
        </div>
        {adminRole === "Client" && client_code_verified === false ? (
          <div className="clientVerificationCode">
            <p style={{ color: "white" }}>
              Ask for client verification code from admin user
            </p>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setClientCode(e.target.value)}
              placeholder="Client verification code..."
            />
            <br />
            <div className="clientCodeButton">
            <button disabled={!clientCode} className="btn btn-info" onClick={setVerificationClientCode}>
              Verify code...
            </button>
            </div>
            <br />
            "22d3f9c8-70f6-4e5d-9a9e-f253e6274f1d"

            <Alerts successMessage={successMessage} errorMessage={errorMessage}/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
