import React from "react";
import "./ClientsPosts.css";
import axios from "axios";
import NoImage from "../../../Asserts/noImageAvail.webp";
import { Link } from "react-router-dom";
// import Spinner from "../../../Spinners/Spinner";

const BlogPosts = () => {
  const [ClientPosts, setClientPosts] = React.useState([]);

  React.useEffect(() => {
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

  return (
    <>
      <div className="blog-posts-wrap">
        {ClientPosts.length <= 0 ? (
          // <Spinner spinnerContent={"client posts"} />
          "sdfsfsf"
        ) : (
          ClientPosts &&
          ClientPosts.map((post) => {
            // Convert created_at string to Date object
            const createdAtDate = new Date(post.created_at);
            // Get month, day, and year from Date object
            const month = createdAtDate.toLocaleString("default", {
              month: "long",
            });
            const day = createdAtDate.getDate();
            const year = createdAtDate.getFullYear();
            return (
              <p className="post-link" key={post.id}>
                <div className="post-wrap">
                  <div className="post-body">
                    <div className="post-body-primary">
                      <div className="post-meta">
                        <p>
                          by <b>{post.username}</b> on{" "}
                          {`${month} ${day}, ${year}`}
                        </p>
                      </div>

                      {/* <div className="post-title">
                        <h2>Blog Title</h2>
                      </div> */}
<br />
<hr style={{backgroundColor:"white"}}/>  
<br />
                      <div className="post-text">
                        {Array.isArray(post.post) ? (
                          <>
                            <p>{post.post[0]}</p>
                          </>
                        ) : (
                          <p>{post.post}</p>
                        )}
                      </div>
                    </div>

                    <div className="post-body-secondary">
                      <div
                        className="post-category"
                        style={{
                          display: Array.isArray(post.post) ? "block" : "none",
                        }}
                      >
                        <p>
                          <Link style={{ color: "grey" }}>Read More</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            );
          })
        )}
      </div>
    </>
  );
};

export default BlogPosts;
