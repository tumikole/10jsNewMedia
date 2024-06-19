import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./ComponentUsers/Home/LandingPage/LandingPage";
import MainGallery from "./ComponentUsers/Gallery/MainGallery/MainGallery";
import Services from "./ComponentUsers/Services/Services";
import Login from "./ComponentUsers/RequestAccess/login";
import Team from "./ComponentUsers/Team/Team";
import Partners from "./ComponentUsers/Partners/Partners";
import Contact from "./ComponentUsers/COntact/Contact";
import About from "./ComponentUsers/About/About";
import Blog from "./ComponentUsers/BlogPage/BlogPage";
import PrivateRoutes from './PrivateRoutes/PrivateRoutes'
import AdminDashboard from "./AdminComponents/AdminDashboard/AdminDashboard.jsx";
import ClientView from "./ClientView/ClientView.jsx"
import NotFound from "./PageNotFound/NotFound.jsx"


const Main = () => {
  const [servicePlan, setServicePlan] = useState("Personal");
  const [adminAvatar, setAdminAvatar] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminLastName, setAdminLastName] = useState("");
  const [adminStatus, setAdminStatus] = useState("");
  const [adminRole, setAdminRole] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPermissions, setAdminPermissions] = useState([]);
  const [clientAdminVerified, setClientAdminVerified] = useState(false);
  const [clientAdminVerificationCode, setClientAdminVerificationCode] =
    useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [switchForms, setSwitchForms] = useState(false);
  const [allCategory, setAllCategory] = useState("");
  const [allFolders, setAllFolders] = useState("");
  const [folderName, setFolderName] = useState("");
  const [subFolderName, setSubFolderName] = useState("");
  const [source, setSource] = useState([]);
  const [folderBySource, setFolderBySource] = useState([]);

  const [galleryFolders, setGalleryFolders] = useState([]);

  const [subfolders, setSubfolders] = useState([]);
  const [file, setFile] = useState(null);
  const [srcName, setSrcName] = useState("");
  const [src, setSrc] = useState("");
  const [folder, setFolder] = useState("");
  const [category, setCategory] = useState("");
  const [eventType, setEventType] = useState("");
  const [discription, setDiscription] = useState("");
  const [photographer, setPhotographer] = useState(adminEmail);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggedInAdmin, setLoggedInAdmin] = useState([]);
  const [allServices, setAllService] = useState(null);

  const [stills, setStills] = useState([]);
  const [categoryType, setCategoryType] = useState("Stills");

  const itemLength = stills.length;
  const navigate = useNavigate();

  const getAllStills = async () => {
    try {
      const response = await axios.get("http://localhost:4000/get_all_landing");
      const initialStills = response.data.response;
      setStills(initialStills);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setAdmin = () => {
    setAdminAvatar(loggedInAdmin.avatar);
    setAdminName(loggedInAdmin.first_name);
    setAdminLastName(loggedInAdmin.last_name);
    setAdminStatus(loggedInAdmin.status);
    setAdminRole(loggedInAdmin.role);
    setAdminEmail(loggedInAdmin.email);
    setAdminPermissions(loggedInAdmin.permissions);
    setClientAdminVerified(loggedInAdmin.client_code_verified);
    setClientAdminVerificationCode(loggedInAdmin.client_code);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (allFolders.length <= 0) {
          const foldersResponse = await axios.get(
            "http://localhost:4000/get_all_folders"
          );
          setAllFolders(foldersResponse.data.folders);
        }

        if (allCategory.length <= 0) {
          const categoriesResponse = await axios.get(
            "http://localhost:4000/get_all_categories"
          );
          setAllCategory(categoriesResponse.data.categories);
        }
        // const sourceResponse = await axios.get(
        //   "http://localhost:4000/get_all_source/Stills"
        // );
        // const response = sourceResponse.data.response; // Accessing the actual source data
        // setSource(response);
        // if (foldersResponse.data.folders && response) {
        //   const foldersFromFoldersFunction = foldersResponse.data.folders.map(
        //     (folder) => folder.folder_name
        //   );
        //   const foldersFromSourceFunction = response.map(
        //     (source) => source.folder
        //   );
        //   const uniqueFolders = foldersFromFoldersFunction.filter(
        //     (folder) => !foldersFromSourceFunction.includes(folder)
        //   );
        //   // Filter out folders from allFolders that are in the uniqueFolders list
        //   const filteredFolders = foldersResponse.data.folders.filter(
        //     (item) => !uniqueFolders.includes(item.folder_name)
        //   );
        //   setGalleryFolders(filteredFolders);
        // }
        if (allServices.length <= 0) {
          const getAllServices = await axios.get(
            "http://localhost:4000/get_all_services"
          );
          setAllService(getAllServices.data.data);
        }
      } catch (error) {
        // Handle errors here
        // console.error("Error fetching data:", error);
      }
    };

    if (loggedInAdmin) {
      const adminUser = localStorage.getItem("user");
      if (adminUser) {
        const user = JSON.parse(adminUser);
        setLoggedInAdmin(user);
      }
    }

    if (token) {
      navigate("/admin_dashboard");
    }
    fetchData();
    setAdmin();
  }, [
    allCategory,
    allFolders,
    allServices,
    loggedInAdmin,
    navigate,
    setAdmin,
  ]);

  const userSignOut = () => {
    localStorage.clear();
    const adminUser = localStorage.getItem("user");
if(!adminUser) {
    navigate("/");
}
  }
  const setSourceByFolder = (item) => {
    setFolderBySource(source.filter((src) => src.folder === item));
    setFolderName(item);
  };
  return (
    <div>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/team" element={<Team />} />
        <Route path="/admin_login" element={<Login />} />
        <Route
          path="/"
          element={<LandingPage setServicePlan={setServicePlan} />}
        />
        <Route
          path="/gallery"
          element={
            <MainGallery
              categoryType={categoryType}
              setCategoryType={setCategoryType}
              galleryFolders={allFolders}
              allCategory={allCategory}
              source={source}
              setSourceByFolder={setSourceByFolder}
              folderBySource={folderBySource}
              folderName={folderName}
              stills={stills}
              itemLength={itemLength}
              getAllStills={getAllStills}
            />
          }
        />
        <Route
          path="/ServicesAndPricingPage"
          element={
            <Services
              servicePlan={servicePlan}
              setServicePlan={setServicePlan}
            />
          }
        />
        <Route element={<PrivateRoutes token={token} />}>
          <Route
            path="/admin_dashboard"
            element={
              <AdminDashboard
                loggedInAdmin={loggedInAdmin}
                allServices={allServices}
                adminAvatar={adminAvatar}
                adminName={adminName}
                adminLastName={adminLastName}
                adminStatus={adminStatus}
                adminRole={adminRole}
                userSignOut={userSignOut}
                adminEmail={adminEmail}
                adminPermissions={adminPermissions}
                clientAdminVerified={clientAdminVerified}
                clientAdminVerificationCode={clientAdminVerificationCode}
                stills={stills}
                itemLength={itemLength}
                getAllStills={getAllStills}
              />
            }
          />

          <Route path="/client_view" element={<ClientView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Main;
