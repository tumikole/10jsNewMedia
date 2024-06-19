import React from "react";
import "./Home.scss";
import NothingToDisplay from "../NothingToDisplay/NothingToDisplay";

const Home = ({
  adminAvatar,
  adminName,
  adminLastName,
  adminRole,
  adminPermissions,
}) => {
  return (
    <div className="adminHome">
      {/* <div className="homeHeader">
        <h1>
          Welcome back {adminName} {adminLastName}
        </h1>
      </div>
      <div className="homeBody">
        <h3>As <u>{adminRole}</u></h3>
        <h2>Permissions</h2>
        <div className="permissions">
          {adminPermissions &&
            adminPermissions.map((item) => {
              return <p>{item}</p>;
            })}
        </div>
      </div>
      <div className="homeFooter"></div> */}
      <NothingToDisplay />
    </div>
  );
};

export default Home;
