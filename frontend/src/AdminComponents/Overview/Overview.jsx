import React, { useState } from "react";
import "./Overview.scss";
import NothingToDisplay from "../NothingToDisplay/NothingToDisplay";

const Overview = ({
  adminName,
  adminLastName,
  adminRole,
  adminPermissions,
}) => {
  const [seletedTab, setSeletedTab] = useState(null);
  return (
    <div className="adminOverview">
      <div className="overviewHeader">
        <h1>Hi, {adminName}. These are your tracked changes</h1>
      </div>
      <div className="overviewBody">
        <div className="overviewItems">
          <div className="overviewItemsContainer">
            <div className="overviewItemsContainerWrapper">
              <h1 className="number">25</h1>
            </div>
            <div
              className="subHeader"
              onClick={() => setSeletedTab("Contents")}
            >
              Contents
            </div>
          </div>
          <div className="overviewItemsContainer">
            <div className="overviewItemsContainerWrapper">
              <h1 className="number">25</h1>
            </div>
            <div className="subHeader" onClick={() => setSeletedTab("Admin")}>
              Admin
            </div>
          </div>
          <div className="overviewItemsContainer">
            <div className="overviewItemsContainerWrapper">
              <h1 className="number">25</h1>
            </div>
            <div className="subHeader" onClick={() => setSeletedTab("Clients")}>
              Clients
            </div>
          </div>
          <div className="overviewItemsContainer">
            <div className="overviewItemsContainerWrapper">
              <h1 className="number">25</h1>
            </div>{" "}
            <div
              className="subHeader"
              onClick={() => setSeletedTab("Services")}
            >
              Services
            </div>
          </div>
          <div className="overviewItemsContainer">
            <div className="overviewItemsContainerWrapper">
              <h1 className="number">25</h1>
            </div>{" "}
            <div className="subHeader" onClick={() => setSeletedTab("Blogs")}>
              Blogs
            </div>
          </div>
          <div className="overviewItemsContainer">
            <div className="overviewItemsContainerWrapper">
              <h1 className="number">25|45</h1>
            </div>{" "}
            <h2 className="subHeader" onClick={() => setSeletedTab("Messages")}>
              Messages
            </h2>
          </div>
        </div>

        <div className="selectedContents">
          {seletedTab === "Contents" || seletedTab === null ? (
            <>
              <h1>Contents</h1>
            </>
          ) : seletedTab === "Admin" ? (
            <>
              <h1>Admin</h1>
            </>
          ) : seletedTab === "Clients" ? (
            <>
              <h1>Clients</h1>
            </>
          ) : seletedTab === "Services" ? (
            <>
              <h1>Services</h1>
            </>
          ) : seletedTab === "Blogs" ? (
            <>
              <h1>Blogs</h1>
            </>
          ) : seletedTab === "Messages" ? (
            <>
              <h1>Messages</h1>
            </>
          ) : (
            <NothingToDisplay />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
