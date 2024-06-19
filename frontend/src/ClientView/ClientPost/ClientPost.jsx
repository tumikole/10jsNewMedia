import React, { useState, useEffect } from "react";
import "./ClientPost.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

function ClientPost({ adminAvatar, adminName, adminLastName, adminRole }) {
  const [post, setPost] = useState("");
  const [showPosts, setShowPosts] = useState([]);
  const toast = useToast();

  const handleAddPost = async (e) => {
    e.preventDefault();
    const data = {
      adminAvatar,
      username: adminName + " " + adminLastName,
      adminRole,
      post,
    };

    const response = await axios.post("http://localhost:4000/posts", data);
    if (response.data.message) {
      toast({
        title: response.data.message,
        description: "",
        status: "success",
        isClosable: true,
      });
      setPost("");

      // setShowPosts(response.data.postData[0].post);
    }
  };

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await axios.get("http://localhost:4000/client_posts");
      setShowPosts(response.data);
    };

    return () => {
      getAllPosts();
    };
  }, []);

  return (
    <div>
      <br />
      <form className="adminAddPostForm" onSubmit={handleAddPost}>
        <label htmlFor="" style={{ color: "#0ef" }}>
          Add Post
        </label>
        <br />
        <textarea
          placeholder="Description"
          style={{
            padding: "5px",
            margin: "5px",
            color: "#0ef",
            width: "100%",
            height: "200px",
          }}
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <br />
        <button
          disabled={!post}
          loadingText="Posting..."
          style={{ color: "#0ef" }}
          className="btn btn-outline-success"
          type="submit"
        >
          Post
        </button>
      </form>
      <div className="clientPosts">
        <div class="wrapper">
          <h1 class="h1">
            Clients articles
            <span class="articles-counter">
              3<span class="visually-hidden">total</span>
            </span>
          </h1>
          <h2 class="h2">2024</h2>
          <div class="stack">
            {showPosts.map((post, i) => {
               const createdAtDate = new Date(post.created_at);

               // Format the date and time in a human-readable format
               const formattedDate = createdAtDate.toLocaleDateString();
               const formattedTime = createdAtDate.toLocaleTimeString();
              return (
                <article class="article" key={post.id}>
                  <div class="article__container">
                    <h2 class="article__title">
                      <a class="article__link" href="#">
                        {post.username}
                      </a>
                    </h2>
                    {/* Check if 'post' is a string or an array */}
                    {typeof post.post === "string" ? (
                      <p class="article__text">{post.post}</p>
                    ) : (
                      post.post.map((postContent, index) => (
                        <p class="article__text" key={index}>
                          {postContent}
                        </p>
                      ))
                    )}
                   <time class="article__date" dateTime={post.created_at}>
            {formattedDate} {formattedTime}
          </time>
                    <div class="article__tags tags">
                      <box-icon name="comment" color="#00eeff"></box-icon>
                      <box-icon name="like" color="#ff0000"></box-icon>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPost;
