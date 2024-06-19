import React, { useState, useEffect } from "react";
// import ImageModal from "./ImageModal";
import { Tabs, TabList, Tab, Tag, Select } from "@chakra-ui/react";
import "./MainGallery.css";
import Stills from "../Photos/Stills";
import MotionPictures from "../Videos/MotionPictures";
import Projects from "../Projects/Projects";
// import NotFound from "../../../PageNotFound/NotFound";
import Img from "../../../Asserts/dee.jpeg";
import Vid1 from "../../../Asserts/10js Media production.mp4";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
function MainGallery({
  categoryType,
  setCategoryType,
  galleryFolders,
  allCategory,
  source,
  setSourceByFolder,
  folderBySource,
  folderName,
  stills,
  itemLength,
  getAllStills,
}) {
  const [showFolders, setShowFolders] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [sourceAddress, setSourceAddress] = useState();
  const [sourceName, setSourceName] = useState();
  const [sourcePhotographer, setSourcePhotographer] = useState();
  const [sourceFolder, setSourceFolder] = useState();
  const [selectedFoldersName, setSelectedFoldersName] = useState("");
  const [randomImage, setRandomImage] = useState(null);

  const stills1 = [
    {
      folderName: "human",
      sourceName: "John Doe",
      date: "2023-01-01",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX9pl8af7Y7nzBN_8gY3XmGZKCzkUOqRcod9oXuBf4g&s",
    },
    {
      folderName: "nature",
      sourceName: "Nature's Beauty",
      date: "2023-02-02",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_xuRKDZMCnjKUSisk2P3pBoH1AY-xNGO5BPEyrxKiQ&s",
    },
    {
      folderName: "animals",
      sourceName: "Wildlife Wonders",
      date: "2023-03-03",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNp5cdaIatjCHPZfk5xC3CqZFjq7znBp7uWfgM6ZBU0A&s",
    },
    {
      folderName: "sport",
      sourceName: "Sports Action",
      date: "2023-04-04",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUzn7-qinvq-jbUgQWNL-OfnXUFXfxbtwMs6-Utey3A&s",
    },
    {
      folderName: "human",
      sourceName: "Jane Smith",
      date: "2023-05-05",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S-3usroBngWIFb_HPtfEsAlCaVzcuRgixmS2EleNTQ&s",
    },
    {
      folderName: "nature",
      sourceName: "Nature's Serenity",
      date: "2023-06-06",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdRDRDssXg4TL3lgIgyriPdpLCkkQlTR4uHt0hyZBLw&s",
    },
    {
      folderName: "animals",
      sourceName: "Animal Kingdom",
      date: "2023-07-07",
      src: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
    },
  ];

  const stills2 = [
    {
      folderName: "human",
      sourceName: "John Doe",
      date: "2023-01-01",
      src: Vid1,
    },
  ];

  const getRandomImage = () => {
    if (categoryType === "Stills") {
      const randomIndex = Math.floor(Math.random() * stills1.length);
      return stills1[randomIndex];
    } else if (categoryType === "Motion Pictures") {
      const randomIndex = Math.floor(Math.random() * stills2.length);
      return stills2[randomIndex];
    }
  };

  // const logRandomImage = () => {
  //   const randomImage = getRandomImage();
  //   setRandomImage(randomImage);
  // };

  useEffect(() => {
    // logRandomImage();
    // const intervalId = setInterval(logRandomImage, 5000);
    // return () => clearInterval(intervalId);
  }, []);

  // const showSelectedSource = (item) => {
  //   setSourceAddress(item.src);
  //   setSourceName(item.source_name);
  //   setSourcePhotographer(item.photographer);
  //   setSourceFolder(item.folder);
  // };

  // const hideSelectedSource = () => {
  //   setSourceAddress();
  //   setSourceName();
  //   setSourcePhotographer();
  //   setSourceFolder();
  // };

  return (
    <>
      <div className="galleryContainer">
        {/* <Navbar /> */}
        <h1 className="galleryTitle text-3xl font-bold mb-4"> </h1>

        <div className="galleryMainContainer flex">
          <div className="galleryMainContainerSideOne">
            <div className="searchGalleryInput">
              <div class="input-group mb-3 searchInput">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <h1
              className="galleryMainContainerSideOneH1"
              disabled
              // onClick={() => setShowFolders(!showFolders)}
            >
              Category
            </h1>
            <br />

            <div className="leftSideCategoryContainer">
              <ul
                style={{
                  display: allCategory.length === 0 ? "none" : "grid",
                  marginTop: ".5rem",
                }}
              >
                {allCategory.length === 0 ? (
                  <div className="folderLoading" style={{ display: "flex" }}>
                    <box-icon
                      color="gray"
                      size="lg"
                      name="folder-open"
                      animation="spin"
                    ></box-icon>
                    <h4
                      style={{
                        color: "gray",
                        marginTop: ".8rem",
                        marginLeft: ".8rem",
                      }}
                    >
                      Wait while we get all category...
                    </h4>
                  </div>
                ) : (
                  allCategory &&
                  allCategory.map((item, i) => {
                    return (
                      <li
                        className={
                          // categoryType === ""  ||
                          categoryType === item.category_name
                            ? "selectedFoldersNames"
                            : "foldersNames"
                        }
                        onClick={() => setCategoryType(`${item.category_name}`)}
                      >
                        {item.category_name}
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
            <h1
              className="galleryMainContainerSideOneH1"
              disabled
              // onClick={() => setShowFolders(!showFolders)}
            >
              Folders
            </h1>
            <br />
            <div className=" rounded shadow mb-4">
              <div className="leftSideFolderNameDisplay">
                <ul
                  onClick={() => setSelectedFoldersName("Random")}
                  style={{
                    display: galleryFolders.length === 0 ? "none" : "grid",
                    marginTop: ".5rem",
                  }}
                >
                  <li
                    style={{ width: "100%" }}
                    onClick={() => setSourceByFolder()}
                    className={
                      selectedFoldersName === "Random" ||
                      selectedFoldersName === ""
                        ? "selectedFoldersNames"
                        : "foldersNames"
                    }
                  >
                    Random
                  </li>
                </ul>
                {galleryFolders.length === 0 ? (
                  <div className="folderLoading" style={{ display: "flex" }}>
                    <box-icon
                      color="gray"
                      size="lg"
                      name="folder-open"
                      animation="spin"
                    ></box-icon>
                    <h4
                      style={{
                        color: "gray",
                        marginTop: ".8rem",
                        marginLeft: ".8rem",
                      }}
                    >
                      Wait while we get all folders...
                    </h4>
                  </div>
                ) : (
                  galleryFolders &&
                  galleryFolders.map((item, index) => (
                    <ul
                      onClick={() => setSelectedFoldersName(item.folder_name)}
                      style={{ display: "grid", marginTop: ".5rem" }}
                    >
                      <li
                        className={
                          selectedFoldersName === item.folder_name
                            ? "selectedFoldersNames"
                            : "foldersNames"
                        }
                        style={{ width: "100%" }}
                        colorScheme="gray"
                        onClick={() => setSourceByFolder(item.folder_name)}
                      >
                        {item.folder_name.replace(/([a-z])([A-Z])/g, "$1 $2")}
                      </li>
                    </ul>
                  ))
                )}
              </div>
            </div>
            <div className="homeLink">
              <Link to="/">
                <box-icon
                  name="home-alt-2"
                  type="solid"
                  color="#00eeff"
                ></box-icon>
                <p>Home</p>
              </Link>
            </div>
          </div>
          <div className="galleryMainContainerSideTwo">
            {categoryType === "Stills" || categoryType === "" ? (
              <div
                className="galleryMainContainerSideTwoAdvert"
                style={{
                  backgroundImage: randomImage
                    ? `linear-gradient(to right, black, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0)), url(${randomImage.src})`
                    : `linear-gradient(to right, black, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0)), url(${Img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  transition: "background-image 0.5s ease-in-out", // Add transition for background image
                }}
              >
                <div className="addSideOne">
                  <div className="addContentDateAndName">
                    <h4>Added 5 days ago...</h4>
                    {randomImage && (
                      <div>
                        <h2>{randomImage.sourceName}</h2>
                        <h3>({randomImage.folderName})</h3>
                      </div>
                    )}
                    {!randomImage && (
                      <div>
                        <h2>Example</h2>
                        <h3>(Folder Name)</h3>
                      </div>
                    )}
                  </div>
                </div>
                <div className="addSideTwo"></div>
              </div>
            ) : (
              <div className="galleryMainContainerSideTwoAdvertVideo">
                <video
                  className="video-player"
                  autoPlay
                  loop
                  muted
                  src={Vid1}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div className="addSideTwo"></div>
              </div>
            )}

            <div className="galleryInfo">
              <div className="galleryInfoContent">
                <ul>
                  <li>
                    Category: {categoryType === "" ? "Stills" : categoryType}
                  </li>
                  <li>
                    Folder:{" "}
                    {selectedFoldersName === ""
                      ? "Random"
                      : selectedFoldersName}
                  </li>
                  
                    <Select placeholder="">
                      <option>Date</option>
                      <option>Ascending</option>
                      <option>Descending</option>
                    </Select>
                    {/* <select class="selectpicker" multiple data-live-search="true">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
  </select> */}
                
                </ul>
              </div>
            </div>
            {categoryType === "" || categoryType === "Stills" ? (
              <Stills
                stills={stills}
                itemLength={itemLength}
                getAllStills={getAllStills}
              />
            ) : categoryType === "Motion Pictures" ? (
              <MotionPictures />
            ) : (
              <Projects />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainGallery;
