import React, { useState } from "react";
import "./AdminDashboard.scss";
import NoImage from "../../Asserts/noImageAvail.webp";
import { Users } from "../Users/Users";
import { Gallery } from "../Gallery/Gallery";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import Overview from "../Overview/Overview";
import Services from "../Services/Services";
import Messages from "../Messages/Messages";
import Settings from "../Settings/Settings";

const AdminDashboard = ({
  loggedInAdmin,
  allServices,
  adminAvatar,
  adminName,
  adminLastName,
  adminStatus,
  adminRole,
  userSignOut,
  adminEmail,
  adminPermissions,
  clientAdminVerified,
  clientAdminVerificationCode,
  stills,
  itemLength,
  getAllStills,
}) => {
  // console.log({
  //   loggedInAdmin,
  //   allServices,
  //   adminAvatar,
  //   adminName,
  //   adminLastName,
  //   adminStatus,
  //   adminRole,
  //   userSignOut,
  //   adminEmail,
  //   adminPermissions,
  //   clientAdminVerified,
  //   clientAdminVerificationCode,
  //   stills,
  //   itemLength,
  //   getAllStills,
  // });
  const [selectedTab, setSelectedTab] = useState(null);
  const tabs = [
    "Users",
    "Gallery",
    "Blogs",
    "Messages",
    "Overview",
    "Services",
  ];
  const userSettingstabs = ["Settings", "Sign out"];

  return (
    <>
      <div className="adminDashboard">
        <div className="sideOne">
          <div className="user-info">
            <div className="user-title">
              <h1>{adminRole !== "Client" ? "Admin" : adminRole}</h1>
              <h4>{adminRole}</h4>
            </div>
            <div className="user-profile">
              <div className="avatar">
                <img src={NoImage} alt="avatar" />
              </div>
              <div className="user">
                <h2>
                  {adminName} {adminLastName}
                </h2>
                <h3>{adminEmail}</h3>
              </div>
            </div>
          </div>
          <div
            className="user-tabs"
            style={{
              display:
                adminRole === "Client" && clientAdminVerified === false
                  ? "none"
                  : "block",
            }}
          >
            <ul>
              {tabs.map((tab) => {
                return (
                  <li
                    style={{
                      display:
                        adminRole === "Client" &&
                        tab !== "Gallery" &&
                        tab !== "Blogs" &&
                        tab !== "Messages"
                          ? "none"
                          : "block",
                    }}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="user-settings-and-signout">
            <ul>
              {userSettingstabs.map((tab) => {
                return (
                  <li
                    onClick={() => setSelectedTab(tab)}
                    className={tab === "Sign out" ? "signout" : "none"}
                  >
                    {tab}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="sideTwo">
          {selectedTab === "Settings" ? (
            <Settings />
          ) : selectedTab === "Messages" ? (
            <Messages />
          ) : selectedTab === "Services" && adminRole !== "Client" ? (
            <Services />
          ) : selectedTab === "Overview" && adminRole !== "Client" ? (
            <Overview
              adminAvatar={adminAvatar}
              adminName={adminName}
              adminLastName={adminLastName}
              adminRole={adminRole}
              adminPermissions={adminPermissions}
            />
          ) : selectedTab === "Blogs" ? (
            <Blogs />
          ) : selectedTab === "Users" && adminRole !== "Client" ? (
            <Users adminEmail={adminEmail} adminRole={adminRole} />
          ) : selectedTab === "Gallery" ? (
            <Gallery adminRole={adminRole} />
          ) : (
            <Home
              adminAvatar={adminAvatar}
              adminName={adminName}
              adminLastName={adminLastName}
              adminRole={adminRole}
              adminPermissions={adminPermissions}
              client_code_verified={clientAdminVerified}
              adminEmail={adminEmail}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
