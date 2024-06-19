import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa"; // Import the home icon from react-icons

import ForgetPassword from "./ForgetPassword";

const LoginPage = ({ token, setToken, setLoggedInAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ForgotPasswordForm, setForgotPasswordForm] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      });
      // Handle successful login
      // Store token and user details in local storage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Convert user object to string before storing

      // Set token and user details in component state for further use if needed
      setToken(response.data.token);

      // navigate("/admin_dashboard");
    } catch (error) {
      console.error("Login failed:", error.response);
      // Handle login failure (e.g., show error message to the user)
    }
  };

  // Check local storage for token on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (
      (storedToken && token === null) ||
      (storedToken && token === undefined)
    ) {
      // Set token in component state if found in local storage
      setToken(storedToken);
    }
  }, [setToken, token]);

  return (
    <div className="loginPageContainer">
      <div className="homebutton">
        <Link to="/">
          <Button leftIcon={<FaHome />}>Go to Home</Button>
        </Link>
      </div>
      {!ForgotPasswordForm ? (
        <div className="FormContainer">
          <div className="loginForm">
            <Stack>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            </Stack>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <br />
                  <FormLabel>Password</FormLabel>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <br />
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    
                    <Text
                      style={{ cursor: "pointer" }}
                      color={"white"}
                      onClick={() => setForgotPasswordForm(true)}
                    >
                      Forgot password?
                    </Text>
                  </Stack>
                  <button className="btn btn-primary" onClick={handleLogin}>
                    Sign in
                  </button>
                </Stack>
              </Stack>
            </Box>
          </div>
        </div>
      ) : (
        <ForgetPassword setForgotPasswordForm={setForgotPasswordForm} />
      )}
    </div>
  );
};

export default LoginPage;
