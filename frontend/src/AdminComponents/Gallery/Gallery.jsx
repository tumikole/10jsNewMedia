import React, { useState } from "react";
import "./Gallery.scss";
import { Form } from "../form";
import GalleryInfo from "./GalleryInfo/GalleryInfo";
import GalleryView from "./GalleryView/GalleryView";

export const Gallery = () => {
  const [seletedTab, setSeletedTab] = useState(null);
  const [seletedCategoryTab, setSeletedCategoryTab] = useState("Stills");

  const formInputs = [
    { type: "file", placeholder: `Add ${seletedCategoryTab}`, value: "" },
    { type: "text", placeholder: `${seletedCategoryTab} name` },
    { type: "text", placeholder: "Description" },
    { type: "button", placeholder: "Name", value: `Add ${seletedCategoryTab}` },
  ];
  const galleryTabs = ["Add", "View"];
  const categoryTabs = ["Stills", "Motion pictures", "Projects"];

  return (
    <div className="adminGallery">
      <div className="galleryHeader">
        <h1>Manage gallery</h1>

        <div className="galleryTab">
          <ul>
            {galleryTabs.map((tab) => {
              return (
                <li onClick={() => setSeletedTab(tab)}>
                  <button
                    className={`btn ${
                      seletedTab === tab ? "btn-info" : "btn-outline-info"
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="galleryCategoryTab"
          style={{ display: seletedTab === "Add" ? "flex" : "none" }}
        >
          <ul>
            {categoryTabs.map((tab) => {
              return (
                <li
                  className={`btn ${
                    seletedCategoryTab === tab ? "selectedCat" : "unselectedCat"
                  }`}
                  onClick={() => setSeletedCategoryTab(tab)}
                >
                  {tab}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {seletedTab === null ? (
        <GalleryInfo />
      ) : seletedTab === "Add" ? (
        <Form
          formInputs={formInputs}
          headerText="Add to gallery"
          required={true}
        />
      ) : (
        <GalleryView />
      )}
    </div>
  );
};
