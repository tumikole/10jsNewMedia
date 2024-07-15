import React, { useEffect, useState } from "react";
import "./GalleryView.scss";
import axios from "axios";
import Alerts from '../../Alerts/Alerts'
import SelectedItems from "./SelectedItems/SelectedItems";


const GalleryView = ({ adminId, adminName, adminLastName }) => {
  const [selectedTab, setSelectedTab] = useState("My own");
  const [files, setFiles] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedItem, setSelectedItem] = useState("");
  const [username, setUsername] = useState("");
  const [clientId, setClientId] = useState("");

  const [show, setShow] = useState(false);

  const selectedUserInformation = {
    adminId, adminName, adminLastName, selectedItem, username, clientId
  }

  const url = "http://localhost:4000/";

  useEffect(() => {
    const getOwnUserFiles = async () => {
      try {
        const res = await axios.get(`${url}get_all_user_contents/${adminId}`);
        setFiles(res.data.data);
      } catch (error) {
        console.error("Error fetching user files:", error);
      }
    }

    const getUsersClientsContent = async () => {
      try {
        const res = await axios.get(`${url}get_client_source/${adminId}`);
        console.log({ res: res.data.data });
        if (res.data.success) {
          setFiles(res.data.data)
        }
      } catch (error) {
        setErrorMessage("Error fetching client sources")

        console.error("Error fetching client sources:", error);
      }
    };


    if (selectedTab === "My own") {
      setFiles(null);
      getOwnUserFiles(selectedTab);
    } else if (selectedTab === "Client") {
      setFiles(null);
      getUsersClientsContent();
    }
  }, [selectedTab, adminId]);


  const deleteFile = async (fileName) => {
    try {
      const bucketName = 'admin';
      const path = `Stills/${adminName}${adminLastName}${adminId}`;
      const response = await axios.post(`${url}delete_source`, {
        bucketName,
        path,
        fileName,
      });

      if (response.data.success) {
        console.log("Delete from the bucket");
        const tableResponse = await axios.delete(`${url}delete_source_from_table/${fileName}`);
        console.log({ tableResponse });

        if (tableResponse.data.success) {
          setSuccessMessage(response.data.message);
          setFiles(files.filter(item => item.src_bucket_id !== fileName));
          setTimeout(() => {
            setSuccessMessage(null);
          }, 3000);
        } else {
          setErrorMessage(tableResponse.data.error || 'Failed to delete record from the table');
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        }
      } else {
        setErrorMessage('Failed to delete file from the bucket');
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      setErrorMessage(error.message || 'An error occurred while deleting the file');
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const selectContent = (event, username, id) => {
    setSelectedItem("");
    setUsername("")
    setClientId("")

    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);
    setUsername(username.replaceAll(' ', ''))
    setClientId(id)
    setShow(true)
    console.log({ selectedValue: selectedUserInformation })
  };

  const handleClose = () => {
    setSelectedItem("");
    setUsername("")
    setClientId("")
    setShow(false)

  }

  // console.log({selectedContent})

  const tabs = ['My own', "Admin", "Client"];
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
                className={`btn ${selectedTab === tab ? "selectedAdmin" : "justList"
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
      <br />

      <div style={{ display: "flex", gap: "1rem", marginLeft: "1rem" }}>
        <div>
          <input type="checkbox" />
          <label htmlFor="" style={{ color: "white" }}>Select all</label>
        </div>

        <div style={{ display: "flex" }}>
          <button style={{ color: "white" }}> <box-icon
            name="trash"
            color="#ff0000"
          ></box-icon></button>
        </div>
      </div>
      <br />
      <div className="userOwnItems">

        {selectedTab === "Client"

          ?

          <table class="table table-striped">
            <thead>
              <tr>
                <th>Select</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Category</th>
                <th scope="col">Select item</th>
              </tr>
            </thead>
            <tbody>
              {files && files.map(file => (
                <tr key={file.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{file.client_email}</td>
                  <td>{file.username}</td>

                  <td>{file.category}</td>
                  <td>
                    <select
                      className="form-select"
                      style={{ backgroundColor: 'transparent', color: "black" }}
                      aria-label="Select item"
                      onChange={(event) => selectContent(event, file.username, file.client_id)}
                      value={selectedItem}
                    >
                      <option value="">Select item</option>
                      {Array.isArray(file.src_bucket_id) && file.src_bucket_id.map((item, i) => (
                        <option key={i} value={item}>{item}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          :

          <table class="table table-striped">
            <thead>
              <tr>
                <th>Select</th>
                <th scope="col">{selectedTab === "My own" ? 'Name' : selectedTab === "Client" ? "Email" : ""}</th>
                <th scope="col">Category</th>
                <th scope="col">{selectedTab === "My own" ? 'Folder name' : selectedTab === "Client" ? "Select item" : ""}</th>
                <th scope="col">Sub folder name</th>
                <th scope="col">Description</th>
                <th scope="col">File</th>
                <th scope="col">Date added</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              {files && files.map(file => {
                const createdAtDate = new Date(file.created_at);
                const formattedDate = createdAtDate.toLocaleDateString();
                return (
                  
                  
                  <>

                    <tr key={file.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{selectedTab === "My own" ? file.source_name : selectedTab === "Client" ? file.client_email : ""}</td>
                      <td>{file.category}</td>
                      <td>{selectedTab === "My own" ? file.folder : selectedTab === "Client" ?
                        <select className="form-select" style={{ backgroundColor: 'transparent', color: "black" }} aria-label="Select item">
                          <option value="">Select item</option>
                          {Array.isArray(file.src_bucket_id) && file.src_bucket_id.map((item, i) => (
                            <option key={i} value={item}>{item}</option>
                          ))}
                        </select>
                        : ""}

                      </td>
                      <td>{file.sub_folder}</td>
                      <td>{file.source_description}</td>
                      <td>
                        <img src={`https://rqufzhhcewwjafsuxipv.supabase.co/storage/v1/object/public/admin/Stills/${adminName}${adminLastName}${adminId}/${file.src_bucket_id}`} alt="" />
                      </td>
                      <td>{formattedDate}</td>
                      <td>
                        <div className="deleteView">
                          <button>
                            <box-icon
                              name="low-vision"
                              color="#2159b9"
                            ></box-icon>
                          </button>
                          <button onClick={() => deleteFile(file.src_bucket_id)}> <box-icon
                            name="trash"
                            color="#ff0000"
                          ></box-icon></button>

                        </div>
                      </td>

                    </tr>
                  </>)
              }
              )}
            </tbody>
          </table>
        }
      </div>
      <Alerts successMessage={successMessage} errorMessage={errorMessage} />
      <SelectedItems show={show}
        handleClose={handleClose}
        selectedUserInformation={selectedUserInformation}
      />
    </div>
  );
};

export default GalleryView;
