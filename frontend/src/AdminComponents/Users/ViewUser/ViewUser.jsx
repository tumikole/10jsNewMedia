import React, { useState } from "react";
import "./ViewUser.scss";
import Image from "../../../Asserts/noImageAvail.webp";
import AddClientContent from "./AddClientContent/AddClientContent";

const ViewUser = ({ selectedUser, adminRole, adminId, adminName, adminLastName }) => {
  const [show, setShow] = useState(false);


  const  addClientDataModal = () => {
    setShow(true);
  }
  
  return (
    <div className="ViewUser">
      <div class="topper">
        <h1>
          {selectedUser.first_name} {selectedUser.last_name}
        </h1>
      </div>
      <div class="container">
        <div class="photo">
          <img src={selectedUser.avatar ? selectedUser.avatar : Image} />
          <p
            style={{
              color: selectedUser.client_code_verified ? "green" : "red",
            }}
          >
            {selectedUser.client_code ? selectedUser.client_code : null}
          </p>
        </div>
        <div class="personal">
          <div>
            <h3 style={{ color: "white" }}>{selectedUser.email}</h3>
          </div>
          <div>
            {selectedUser.status ? (
              <div style={{ display: "flex", gap: "1rem" }}>
                <box-icon name="user-check" color="#008000"></box-icon>
                <p style={{ color: "green" }}>Active</p>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "1rem" }}>
                <box-icon name="user-x" color="#ff0000"></box-icon>
                <p style={{ color: "red" }}>Not active</p>
              </div>
            )}
          </div>
          <div>
            {selectedUser.client_code_verified &&
              selectedUser.role === "Client" ? (
              <div
                style={{
                  display: selectedUser.role === "Client" ? "flex" : "none",
                  gap: "1rem",
                }}
              >
                <box-icon name="user-check" color="#008000"></box-icon>
                <p style={{ color: "green" }}>Verified</p>
              </div>
            ) : (
              <div
                style={{
                  display: selectedUser.role === "Client" ? "flex" : "none",
                  gap: "1rem",
                }}
              >
                <box-icon name="user-x" color="#ff0000"></box-icon>
                <p style={{ color: "red" }}>Not verified</p>
              </div>
            )}
          </div>
        </div>
        <div class="points">
          <h4 style={{ color: "white" }}>
            {selectedUser.role === "Client" && (
              <div onClick={addClientDataModal}>
                <box-icon name='image-add' size="lg" color='#00eeff' ></box-icon>
              </div>
            )}
          </h4>
          <p style={{ color: "white" }}>Role: {selectedUser.role}</p>
        </div>
        <hr style={{ color: "white" }} />
        <div style={{ color: "white" }}>
          Joined on{" "}
          {new Date(selectedUser.created_at).toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}
        </div>
        <hr style={{ color: "white" }} />

        <div className="userPermissions">
          <h1>Permissions</h1>
          <div className="userPermissionContainer">
            <select class="form-select" aria-label="Default select example">
              {selectedUser.permissions.map((item) => {
                return (
                  <>
                    <option disabled>{item}</option>
                  </>
                );
              })}
            </select>
            <div
              class="card"
              style={{
                display:
                  adminRole === "Super Admin" || adminRole === "Project Manager"
                    ? "block"
                    : "none",
                width: "18rem",
              }}
            >
              <div class="card-header">
                <p>All the permissions</p>{" "}
                <box-icon name="add-to-queue" color="#64b0f6"></box-icon>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AddClientContent show={show} setShow={setShow} adminId={adminId} adminName={adminName} adminLastName={adminLastName} selectedUser={selectedUser}/>
    </div>
  );
};

export default ViewUser;
