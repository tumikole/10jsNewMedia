// NotFound.js
import React from "react";
import './NotFound.css'
import { Link } from "react-router-dom";
import { Center, Text, Button } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa"; // Import the home icon from react-icons

const NotFound = () => {
  return (
    // <Center height="100vh">
    //   <div className="text-center">
    //     <Text fontSize="6xl" fontWeight="bold" mb="4" color="red.500">
    //       404
    //     </Text>
    //     <Text fontSize="2xl" mb="8">
    //       Page not found
    //     </Text>
    //     <Text fontSize="lg">
    //       Oops! The page you are looking for might be in another castle.
    //     </Text>
    //     <Button
    //       as="a"
    //       href="/"
    //       colorScheme="teal"
    //       mt="8"
    //       leftIcon={<FaHome />}
    //     >
    //       Go to Home
    //     </Button>
    //   </div>
    // </Center>
    <div className="body">
    <div class="room">
      <div class="cuboid">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
      </div>
      <div class="oops">
        <h2>OOPS!</h2>
        <p>We can't find the page that you're looking for :(</p>
      </div>
      <div class="center-line">
        <div class="hole">
          <div class="ladder-shadow"></div>
          <div class="ladder"></div>
        </div>
        <div class="four">4</div>
        <div class="four">4</div>
        <div class="btn">
          <Link to="/">BACK TO HOME</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NotFound;
