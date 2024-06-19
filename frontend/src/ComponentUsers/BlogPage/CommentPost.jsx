import React, { useState } from "react";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import "./BlogPage.css";
import SuccessMessage from "../../AlertMessage/AllertMessage";
import axios from "axios";
const CommentPost = ({isOpen}) => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const data = {
        title,
        comment,
      };
      
      const response = await axios.post(`http://localhost:4000/comments/`, data);
      
      if (response.data.success) {
        setMessage(response.data.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } 
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while sending the request");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="commentsContainer">
      <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
        <form onSubmit={handleSubmit}>
          <Box mb={4}>
            <Input
              placeholder="Title"
              size="lg"
              borderRadius="md"
              border="1px solid"
              borderColor="gray.200"
              mb={4}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <Textarea
              placeholder="Write your blog post here..."
              size="lg"
              borderRadius="md"
              border="1px solid"
              borderColor="gray.200"
              minHeight="200px"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Box>
          <Button type="submit" colorScheme="blue">
            Comment
          </Button>
        </form>
      </Box>

      <SuccessMessage message={message} />
    </div>
  );
};

export default CommentPost;
