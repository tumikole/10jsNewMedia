import React, { useState } from "react";
import "./GalleryView.scss";

const GalleryView = () => {
  const [selectedTab, setSelectedTab] = useState("Admin");
  const tabs = ["Admin", "Client"];
  return (
    <div className="adminGalleryView">
      <div className="galleryViewHeader">
        <div className="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search..."
          />
        </div>
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                className={`btn ${
                  selectedTab === tab ? "selectedAdmin" : "justList"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                | {/* */}
                {tab}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="galleryViewBody">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GalleryView;
