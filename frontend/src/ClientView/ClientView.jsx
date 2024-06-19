import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Flex,
  Link,
  Text,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";

import "./ClientView.css";
import ClientSources from "./ClientSources/ClientSources";
import ClientVideos from "./ClientVideos/ClientVideos";
import ClientPost from "./ClientPost/ClientPost";

const ClientView = ({
  adminAvatar,
  adminName,
  adminLastName,
  adminStatus,
  adminRole,
  clientAdminVerified,
  adminEmail,
  clientAdminVerificationCode,
  clientUserLinks,
  adminLinkTabs,
  adminPermissions,
}) => {
  const [clientCode, setClientCode] = useState("");
  const [email, setEmail] = useState("");
  const [fileType, setFileType] = useState("images");

  useEffect(() => {
    const clientToken = localStorage.getItem("token");

    if (clientToken) {
      try {
        const clientUser = localStorage.getItem("user");

        const clientUserData = JSON.parse(clientUser);
        setEmail(clientUserData.email);
        // Rest of your code
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  const verifyClientCode = async () => {
    const data = {
      email,
      code: clientCode,
    };
    try {
      const verifyClient = await axios.post(
        "http://localhost:4000/verify_client_code",
        data
      );

      if (verifyClient.data.codeMatched === true) {
        const clientUser = localStorage.getItem("user");
        if (clientUser) {
          try {
            const clientUserData = JSON.parse(clientUser);
            clientUserData.client_code_verified = true;
            localStorage.setItem("user", JSON.stringify(clientUserData));
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        }
      }
    } catch (error) {
      console.error("Error verifying client code:", error);
    }
  };

  return (
    <>
      {clientAdminVerified !== true ? (
        <div className="clientviewwelcome">
          <h1>
            Hi {adminName} {adminLastName}
          </h1>
          <h1>
            Enter client verification code
            <br />
            <hr
              style={{
                backgroundColor: "#0ef",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />
            <h3 style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Ask admin to send your verification code to proceed
            </h3>
          </h1>

          <div style={{ width: "20%", margin: "auto" }}>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={(e) => setClientCode(e.target.value)}
            />
            <br />
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={verifyClientCode}
              disabled={clientCode === ""}
              style={{ width: "100%" }}
            >
              Verify
            </button>
          </div>
        </div>
      ) : (
        <div className="clientviewwelcome">
          <header className="projects-header">
            <h1>Welcome back {adminName}</h1>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftAddon>@</InputLeftAddon>
                <Input
                  type="email"
                  disabled
                  placeholder={`Search ${adminLinkTabs.toLowerCase()}...`}
                />
              </InputGroup>
            </Stack>
          </header>
          <div
            className="clientLinkBar"
            style={{ display: adminLinkTabs === "Post" ? "none" : "flex" }}
          >
            <Flex bg="gray.800" p={4} justify="center">
              <Flex align="center">
                <Link href="#" color="#0ef" mr={4}>
                  Download all your {adminLinkTabs.toLowerCase()}
                </Link>
              </Flex>
            </Flex>
          </div>
          {adminRole === "Client" &&
          clientAdminVerificationCode &&
          adminLinkTabs === "Stills" ? (
            <ClientSources
              adminEmail={adminEmail}
              clientAdminVerificationCode={clientAdminVerificationCode}
              fileType={fileType}
            />
          ) : adminRole === "Client" &&
            clientAdminVerificationCode &&
            adminLinkTabs === "Motion Pictures" ? (
            <ClientVideos />
          ) : adminRole === "Client" &&
            clientAdminVerificationCode &&
            adminLinkTabs === "Post" ? (
            <ClientPost
              adminAvatar={adminAvatar}
              adminName={adminName}
              adminLastName={adminLastName}
              adminRole={adminRole}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default ClientView;
