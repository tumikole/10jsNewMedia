import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NoImage from "../../../Asserts/noImageAvail.webp"
import "./ClientPost.css";



import {
  Avatar,
  Box,
  Stack,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import "./ClientPost.css";
const ClientPost = () => {
  const [ClientPosts, setClientPosts] = useState([]);

  useEffect(() => {
    const getAlClientPosts = async () => {
      if (ClientPosts.length <= 0) {
        const response = await axios.get("http://localhost:4000/client_posts");
        if (response.data) {
          setClientPosts(response.data);
        }
      }
    };
    return () => {
      getAlClientPosts();
    };
  });

  const showThreePostst = ClientPosts.slice(0, 3);
  return (
    <div className="homeClientPost">
      <h1 className="homePageTitle">ClientPost</h1>
      <div className="clientPostContainer">
        {showThreePostst.length < 0 ? (
          // <Spinner spinnerContent={"client posts"} />
          "no client posts"
        ) : (
          showThreePostst &&
          showThreePostst.map((clientPost) => {
            return (
              <div className="postWrapper">
                <Stack
                  spacing={{ md: 10 }}
                  align={"center"}
                  direction={"column"}
                >
                  <Box>
                    <img
                    className="clientPostImage"
                      src={
                        clientPost.post_image ? clientPost.post_image : NoImage
                      }
                      
                    />

                    <h2 className="clientPostUsername">
                      {clientPost.username}
                    </h2>
                  </Box>
                  {Array.isArray(clientPost.post) ? (
                    <>
                      <p className="clientPostDetails">{clientPost.post[0]}</p>{" "}
                    </>
                  ) : (
                    <p className="clientPostDetails">{clientPost.post}</p>
                  )}
                </Stack>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ClientPost;
