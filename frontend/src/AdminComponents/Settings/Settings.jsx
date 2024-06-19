import React, { useState } from "react";
import "./Settings.scss";
import Profile from "./Profile/Profile";
import UsersSetting from "./UsersSetting/UsersSetting";

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState("Profile");
  const tabs = ["Profile", "Users"];
  return (
    <div className="adminSetting">
      <div className="adminSettingHeader">
        <h1>Settings</h1>
      </div>
      <div className="settingTabs">
        <ul>
          {tabs.map((tab) => {
            return (
              <li className="" onClick={() => setSelectedTab(tab)}>
                <button
                  className={
                    selectedTab === tab
                      ? "btn btn-info"
                      : "btn btn-outline-info"
                  }
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="adminSettingBody">
        {selectedTab === "Profile" || selectedTab === null ? (
          <Profile />
        ) : (
          <UsersSetting />
        )}
      </div>
    </div>
  );
};

export default Settings;
