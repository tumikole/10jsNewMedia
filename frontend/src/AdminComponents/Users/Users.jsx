import React, { useState, useEffect } from "react";
import "./Users.scss";
import axios from "axios";
import ModalShow from "../Modal/Modal";
import { v4 as uuidv4 } from "uuid";

export const Users = ({ adminEmail }) => {
  const [header, setHeader] = useState("Users");
  const [users, setUsers] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null);
  const [userPermission, setUserPermission] = useState(null);
  const [clientPromCode, setClientPromCode] = useState(null);

  const [selectedRole, setSelectedRole] = useState(null);

  const [show, setShow] = useState(false);

  const url = "http://localhost:4000/";

  const addUsers = async () => {
    const clientUser 
    if (role === "Client") {  
      const res = await axios.post(`${url}add_client_user`, )
    }
  }

  const setAdminUsers = async () => {
    const res = await axios.get(`${url}request_users`);
    setUsers(res.data.data);
  };

  const setClientUsers = async () => {
    const res = await axios.get(`${url}request_client_users`);
    setUsers(res.data.data);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const filteredUsers = users.filter((user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  console.log({ selectedRole });
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getAllPermissions = async () => {
      const res = await axios.get(`${url}get_all_permissions`);
      if (res.data.data) {
        setPermissions(res.data.data);
      } else {
        alert("Network problem  ");
      }
    };

    if (selectedRole) {
      const code = uuidv4();
      setClientPromCode(code);
    }

    if (header === "Add") {
      setUsers([]);
    }

    return () => {
      if (permissions.length <= 0) {
        getAllPermissions();
      }
    };
  }, [permissions, header, selectedRole]);

  return (
    <div className="adminUsers">
      <div className="usersHeader">
        <div className="title">
          <div className="titleName">
            <h1>
              {header === "Admin"
                ? `${header} users`
                : header === "Clients"
                ? `${header} users`
                : header === "Add"
                ? `${header} users`
                : "Users"}
            </h1>
          </div>
          <div className="addUserButton">
            <div onClick={() => setAdminUsers()}>
              <button
                className="btn btn-outline-info addUser"
                onClick={() => setHeader("Admin")}
              >
                Admin
              </button>
            </div>
            <div onClick={() => setClientUsers()}>
              <button
                className="btn btn-outline-info addUser"
                onClick={() => setHeader("Clients")}
              >
                Clients
              </button>
            </div>
            <button
              className="btn btn-outline-info addUser"
              onClick={() => setHeader("Add")}
            >
              Add
            </button>
          </div>
        </div>
        <div
          className="searchAndFilter"
          style={{ display: users.length > 0 ? "block" : "none" }}
        >
          <div className="searchContainer">
            <input
              type="search"
              name=""
              className="search form-control"
              placeholder="Search..."
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div className="filterAndDisplay">
            <button className=" filter">
              <box-icon name="filter-alt" color="#ffffff"></box-icon>
            </button>
            <button className=" filter">
              <box-icon name="list-ul" color="#ffffff"></box-icon>
            </button>
            <button className=" filter">
              <box-icon name="grid" type="solid" color="#ffffff"></box-icon>
            </button>
          </div>
        </div>

        {header === "Add" ? (
          <div className="AddTable">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      id=""
                      placeholder="Firstname..."
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      id=""
                      placeholder="Lastname..."
                      onChange={(e) => setLastname(e.target.value)}
                      disabled={!firstname}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      className="form-control"
                      name=""
                      id=""
                      placeholder="Email..."
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!lastname}
                    />
                  </td>
                  <td>
                    {selectedRole ? (
                      <button
                        className="btn btn-info"
                        onClick={handleShow}
                        disabled={!email}
                      >
                        {selectedRole}
                      </button>
                    ) : (
                      <button
                        className="btn btn-info"
                        onClick={handleShow}
                        disabled={!email}
                      >
                        Set role
                      </button>
                    )}
                  </td>

                  <td>
                    <div className="acceptDeleteWrapper">
                      <div className="acceptDelete">
                        <box-icon name="check" color="#008000"></box-icon>
                      </div>
                      <div className="acceptDelete">
                        <box-icon name="trash" color="#ff0000"></box-icon>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="permissionList">
              {permissions &&
                permissions.map((permission) => {
                  return (
                    <div
                      class="card border-primary mb-3"
                      style={{ maxWidth: "18rem" }}
                      key={permission.id}
                    >
                      <div class="card-header">{permission.role}</div>
                      <div class="card-body text-primary">
                        {Object.entries(permission.permissions).map(
                          ([item, status]) => (
                            <div key={item} className="card-text">
                              <p>{item}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <div
            className="userList"
            style={{ display: users.length > 0 ? "block" : "none" }}
          >
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Role</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, index) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.role}</td>
                        {user.status === true && adminEmail !== user.email ? (
                          <td>
                            <box-icon
                              name="user-check"
                              color="#008000"
                            ></box-icon>
                          </td>
                        ) : adminEmail === user.email ? (
                          <td>
                            <box-icon
                              name="user-circle"
                              color="rgba(17,17,17,0.54)"
                            ></box-icon>
                          </td>
                        ) : (
                          <td>
                            <box-icon name="user-x" color="#ff0000"></box-icon>
                          </td>
                        )}
                        <td>
                          <div className="deleteViewWrapper">
                            <div className="deleteView">
                              <box-icon
                                name="low-vision"
                                color="#2159b9"
                              ></box-icon>
                            </div>

                            {adminEmail === user.email ? (
                              <div className="deleteView">
                                <box-icon
                                  name="trash"
                                  color="rgba(17,17,17,0.54)"
                                ></box-icon>
                              </div>
                            ) : (
                              <div className="deleteView">
                                <box-icon
                                  name="trash"
                                  color="#ff0000"
                                ></box-icon>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ModalShow
        show={show}
        setShow={setShow}
        content={permissions}
        setSelectedRole={setSelectedRole}
      />
    </div>
  );
};
