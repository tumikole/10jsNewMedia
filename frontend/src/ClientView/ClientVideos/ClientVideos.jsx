import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useToast,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Spinners from "../../Spinners/Spinner";
import SpinnersDataWaiting from "../../Spinners/Spinner";

const ClientVideos = ({
  adminEmail,
  clientAdminVerificationCode,
  fileType,
}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toast = useToast();

  const preventDefault = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const getImages = async () => {
      try {
        // Make a GET request to retrieve images based on email, code, and fileType
        const response = await axios.get(
          "http://localhost:4000/get_client_source",
          {
            params: {
              email: adminEmail,
              code: clientAdminVerificationCode,
              fileType,
            },
          }
        );
        // If successful, update the state with the retrieved images
        if (response.data.data[0].files) {
          setVideos(response.data.data[0].files);
        }
      } catch (error) {
        setError("No stills in your data");
      } finally {
        // Set loading to false once the request is completed
        setLoading(false);
      }
    };

    getImages();
  }, [adminEmail, clientAdminVerificationCode, fileType, toast]);

  // Render loading state while the request is in progress
  if (loading) {
    return <Spinners />;
  }

  // Render an error message if there was an error
  if (error) {
    return (
      <div>
        <p
          style={{
            fontSize: "3rem",
            textAlign: "center",
            color: "#0ef",
            marginTop: "10rem",
          }}
        >
          No data available at the moment.
        </p>
        <br />
        <SpinnersDataWaiting />
        <br />
        <p style={{ fontSize: "2.5rem", textAlign: "center", color: "#0ef" }}>
          The data will be uploaded soon, and the admin will get in touch as
          soon as it's available.
        </p>
      </div>
    );
  }

  // Render the images
  return (
    <div>
      <div>
        <br />
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th style={{ color: "#0ef" }}>{fileType}</Th>
              <Th style={{ color: "#0ef" }}>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {videos &&
              videos.map((image) => (
                <Tr key={image.id}>
                  <Td>
                    <Box boxSize="50px" borderRadius="full" overflow="hidden">
                      <img
                        src={image}
                        alt={image}
                        style={{ maxWidth: "50px" }}
                        onContextMenu={preventDefault} // Prevent right-click menu
                        onDragStart={preventDefault} // Prevent dragging
                      />
                    </Box>
                  </Td>
                  <Td>
                    <div
                      className="action"
                      style={{ display: "flex", gap: "2rem" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: ".5rem",
                          color: "#0ef",
                          cursor: "pointer",
                        }}
                      >
                        <box-icon name="download" color="#008000"></box-icon>
                        <p>Download</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: ".5rem",
                          color: "#0ef",
                          cursor: "pointer",
                        }}
                      >
                        <box-icon name="trash" color="#ff0000"></box-icon>
                        <p>Delete</p>
                      </div>
                    </div>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default ClientVideos;
