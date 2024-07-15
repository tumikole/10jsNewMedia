import React, { useState } from "react";
import "./Gallery.scss";
import NothingToDisplay from '../NothingToDisplay/NothingToDisplay'
import GalleryInfo from "./GalleryInfo/GalleryInfo";
import GalleryView from "./GalleryView/GalleryView";
import AddStills from "./GalleryView/AddStills/AddStills";
import MotionPictures from "./GalleryView/MotionPictures/MotionPictures";
import Projects from "./GalleryView/Projects/Projects";

export const Gallery = ({ adminRole, adminId, adminName, adminLastName, allCategory,
  allFolders

 }) => {
  const [seletedTab, setSeletedTab] = useState(null);
  const [seletedCategoryTab, setSeletedCategoryTab] = useState("Stills");

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
                <li

                  onClick={() => setSeletedTab(tab)}
                >
                  <button
                    className={`btn ${seletedTab === tab ? "btn-info" : "btn-outline-info"
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
                  style={{
                    display:
                      adminRole === "Client" && tab === "Projects"
                        ? "none"
                        : "block",
                  }}
                  className={`btn ${seletedCategoryTab === tab ? "selectedCat" : "unselectedCat"
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
      ) : seletedTab === "Add" && seletedCategoryTab === 'Stills' ? (
        <AddStills adminId={adminId} adminName={adminName} adminLastName={adminLastName}  allCategory={allCategory}
        allFolders={allFolders}

          />

      ) : seletedTab === "Add" && seletedCategoryTab === "Motion pictures"
        ? (
          <MotionPictures 
          adminId={adminId} adminName={adminName} adminLastName={adminLastName}  allCategory={allCategory} 
          allFolders={allFolders}

          />
        ) : seletedTab === "Add" && seletedCategoryTab === "Projects"
          ? <Projects 
          adminId={adminId} adminName={adminName} adminLastName={adminLastName}  allCategory={allCategory}
          allFolders={allFolders}

          /> :
          seletedTab !== "Add" ? (
            <GalleryView adminId={adminId} adminName={adminName} adminLastName={adminLastName}/>
          ) :
            <NothingToDisplay />
      }
    </div>
  );
};