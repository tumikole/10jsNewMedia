import React, { useState } from "react";
import "./Blogs.scss";
import AddBlog from "./AddBlog/AddBlog";
import ViewBlogs from "./ViewBlogs/ViewBlogs";
import ViewClientsPost from "./ViewClientsPost/ViewClientsPost";
import BlogsHome from "./BlogsHome/BlogsHome";

const Blogs = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const tabs = ["Add blog", "View blogs", "View clients posts"];
  return (
    <div className="adminBlogs">
      <div className="adminBlogsHeader">
        <div className="header">
          <h1>Blogs</h1>
        </div>
      </div>
      <div className="adminBogTabs">
        <ul>
          {tabs.map((tab) => {
            return (
              <li onClick={() => setSelectedTab(tab)}>
                <button
                  className={
                    tab === selectedTab
                      ? "btn btn-info"
                      : "btn btn-outline-info"
                  }
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="adminBlogsBody">
        {selectedTab === "Add blog" ? (
          <AddBlog />
        ) : selectedTab === "View blogs" ? (
          <ViewBlogs />
        ) : selectedTab === "View clients posts" ? (
          <ViewClientsPost />
        ) : (
          <BlogsHome />
        )}
      </div>
    </div>
  );
};

export default Blogs;
