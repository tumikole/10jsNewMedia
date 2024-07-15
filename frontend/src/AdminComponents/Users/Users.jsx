import React, { useState, useEffect } from "react";
import "./Users.scss";
import axios from "axios";
import ModalShow from "../Modal/Modal";
import Spinner from "../../Spinners/Spinner";
import Alerts from "../Alerts/Alerts";
import ViewUser from "./ViewUser/ViewUser";

export const Users = ({ adminEmail, adminRole, adminId, adminName, adminLastName }) => {
  const [header, setHeader] = useState("");
  const [numberOfUsers, setMumberOfUsers] = useState(null);
  const [numberOfAdmin, setMumberOfAdmin] = useState(null);
  const [numberOfClients, setMumberOfClients] = useState(null);

  const [users, setUsers] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [userPermission, setUserPermission] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedUser, setSelectdUser] = useState(null);
  const [showUser, setShowUser] = useState(false);

  const [show, setShow] = useState(false);

  const url = "http://localhost:4000/";

  const addUsers = async () => {
    const user = {
      firstName: firstname,
      lastName: lastname,
      email,
      role: selectedRole,
      permissions: userPermission,
    };

    try {
      const res = await axios.post(`${url}request_users`, user);
      if (res.data.success) {
        setSuccessMessage(res.data.message);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      }
    } catch (error) {
      setErrorMessage("User not succefully added");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    }
  };

  const setAdminUsers = async () => {
    setUsers([]);
    try {
      const res = await axios.get(`${url}request_users`);
      setUsers(res.data.data);
      setShowUser(false);
    } catch (error) {
      setErrorMessage("Loading users failed");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    }
  };

  const setClientUsers = async () => {
    setUsers([]);
    try {
      const res = await axios.get(`${url}request_client_users`);
      setUsers(res.data.data);
      setShowUser(false);
    } catch (error) {
      setErrorMessage("Loading users failed");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const filteredUsers = users.filter((user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const handleShow = () => setShow(true);

  const deleteUser = async (id) => {
    const deletedUser = await axios.delete(`${url}delete_user/${id}`);
    setLoading(true);
    if (deletedUser.data.success) {
      setLoading(false);

      const deletedUserEmail = deletedUser.data.deletedUser[0].email;
      const updatedUsers = users.filter(
        (user) => user.email !== deletedUserEmail
      );
      console.log({ deletedUserEmail, updatedUsers });
      setUsers(updatedUsers);
      setSuccessMessage(deletedUser.data.message);
      clearUserInputsFields();
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    }
  };

  const viewUser = async (user) => {
    setSelectdUser(user);
    setShowUser(true);
    setHeader("User profile");
  };

  const addClientDataModal = () => {
    setShowUser(true);
  }
  const clearUserInputsFields = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setUserPermission([]);
    setSelectedRole(null);
  };

  useEffect(() => {
    try {
      const getAllPermissions = async () => {
        const res = await axios.get(`${url}get_all_permissions`);
        if (res.data.data) {
          setPermissions(res.data.data);
        } else {
          alert("Network problem");
        }
      };

      const getAdminLength = async () => {
        const res = await axios.get(`${url}request_users`);
        setMumberOfAdmin(res.data.data.length);
      }

      const getClientLength = async () => {
        const res = await axios.get(`${url}request_client_users`);
        setMumberOfClients(res.data.data.length);
      }
      const addUsersLength = () => {
        const results = numberOfAdmin + numberOfClients
        setMumberOfUsers(results)
      }
      if (header === "Add") {
        setUsers([]);
      }
      return () => {
        if (permissions.length <= 0) {
          getAllPermissions();
        }

        if (header === "") {
          getAdminLength()
          getClientLength()
        }
        if (numberOfAdmin || numberOfClients) {
          addUsersLength()
        }
      }
    } catch (error) {

    }
  }, [permissions, header, selectedRole, numberOfUsers, numberOfAdmin, numberOfClients]);

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
                onClick={() => setHeader("")}
              >
                Users
              </button>
            </div>
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
          style={{
            display:
              users.length > 0 &&
                !showUser && header !== "" &&
                (adminRole === "Super Admin" || adminRole === "Project Manager")
                ? "flex"
                : "none",
          }}
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

        <div className="users_new_styling" style={{ display: header === "" ? "block" : "none" }}>
          <div class="banner">
            <div className="img">
              <div class="overlay left">
                <h1 id="counter">{numberOfUsers ? numberOfUsers : "0"}</h1>
                <p class="muted">Total users</p>
              </div>
            </div>
          </div>
          <div className="showAllUsersLength">
            <div className="admin">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Admin</h5>
                  <p class="card-text">{numberOfAdmin ? numberOfAdmin : "0"}</p>
                  <button className="btn btn-info"
                    onClick={() => setHeader("Admin")}

                  >View admins</button>
                </div>
              </div>
            </div>
            <div className="clients">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Clients</h5>
                  <p class="card-text">{numberOfClients ? numberOfClients : "0"}</p>
                  <button className="btn btn-info"
                    onClick={() => setHeader("Clients")}
                  >View clients</button>
                </div>
              </div>

            </div>

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
                      name="firstname"
                      className="form-control"
                      placeholder="Firstname..."
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
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
                      value={lastname}
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
                      value={email}
                      disabled={!lastname}
                    />
                  </td>
                  <td>
                    {permissions.length <= 0 ? (
                      <button class="btn btn-info" type="button" disabled>
                        <span
                          class="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading roles...
                      </button>
                    ) : selectedRole ? (
                      <button
                        className="btn btn-info"
                        onClick={handleShow}
                        disabled={!email}
                        value={selectedRole}
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
                      {loading ? (
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <div className="acceptDelete" onClick={addUsers}>
                          <box-icon name="check" color="#008000"></box-icon>
                        </div>
                      )}
                      <div className="acceptDelete">
                        <box-icon
                          name="trash"
                          color="#ff0000"
                          onClick={clearUserInputsFields}
                        ></box-icon>
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
                      key={permission.id}
                      class="card"
                      style={{ width: "18rem" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">{permission.role}</h5>

                        {Object.entries(permission.permissions)
                          // .slice(0, 4)
                          .map(([item, status]) => (
                            <div key={item} className="card-text">
                              <p>{item}</p>
                            </div>
                          ))}
                        {/* <a href="#" class="card-link">
                          View entire permissions
                        </a> */}
                      </div>
                    </div>

                    // <div
                    //   class="card border-primary mb-3"
                    //   style={{ maxWidth: "18rem" }}
                    //   key={permission.id}
                    // >
                    //   <div class="card-header">{permission.role}</div>
                    //   <div class="card-body text-primary">
                    //     {Object.entries(permission.permissions).map(
                    //       ([item, status]) => (
                    //         <div key={item} className="card-text">
                    //           <p>{item}</p>
                    //         </div>
                    //       )
                    //     )}
                    //   </div>
                    // </div>
                  );
                })}
            </div>
          </div>
        ) : users.length > 0 && !showUser && header !== '' ? (
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
                            <div
                              className="deleteView"
                              onClick={() => viewUser(user)}
                            >
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
                              <div
                                className="deleteView"
                                onClick={() => deleteUser(user.id)}
                              >
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
        ) : showUser ? (
          <ViewUser selectedUser={selectedUser} adminRole={adminRole} adminId={adminId} adminName={adminName} adminLastName={adminLastName} />
        ) :
          header !== '' && !showUser ?
            (
              <Spinner />
            )

            : ""}
      </div>

      <ModalShow
        show={show}
        setShow={setShow}
        content={permissions}
        setSelectedRole={setSelectedRole}
        permissions={permissions}
        setUserPermission={setUserPermission}
      />
      <Alerts successMessage={successMessage} errorMessage={null} />
    </div>
  );
};
