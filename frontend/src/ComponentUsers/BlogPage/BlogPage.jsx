import React, { useState, useEffect } from "react";
import "./BlogPage.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import ClientsPosts from "./ClientsPosts/ClientsPosts";
import View from "../../Asserts/10jsView.mkv";
import {
  Box,
  Center,
  Heading,
  Text,
  Image,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";

const BlogPage = () => {
  const [comments, setComments] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();
  const [blogComments, setBlogComments] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      if (comments.length <= 0) {
        const allComments = await axios.get(`http://localhost:4000/comments/`);
        setComments(allComments.data.comments);
      }
    };

    async function getBlogs() {
      if (blogs.length <= 0) {
        try {
          const response = await axios.get("http://localhost:4000/blogs");
          const data = response.data;
          if (!data) {
            throw new Error("Failed to fetch blogs");
          } else {
            setBlogs(data);
          }
        } catch (error) {
          console.error("Error fetching blogs:", error.message);
          throw error;
        }
      }
    }
    return () => {
      getComments();
      getBlogs();
    };
  }, [blogs.length, comments.length]);

  return (
    <div className="blogPagePage">
      <div className="blogNav">
        <Navbar />
      </div>
      <div className="blogBody">
        <h2 className="border-b-2 border-yellow-600 mb-4 blogPageHeader">
          <span className="bg-yellow-600 px-2 py-1 text-white uppercase tracking-wide">
            LATEST BLOGS
          </span>
        </h2>
        <div className="trendingCardsContainer">
          <div className="blogCardContainer">
            <p className="h-72 md:h-96 block group relative md:mx-2 overflow-hidden">
              <video
                autoPlay="true"
                controls
                alt=""
                src="https://www.shutterstock.com/shutterstock/videos/1028374757/preview/stock-footage-silhouetted-happy-asian-family-playing-and-having-fun-on-the-beach-at-sunset-slow-motion-family.webm"
                className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"
              />

              <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
              <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                <div className="h-1/2 relative">
                  <div className="absolute bottom-0">
                    <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
                      10js project overview{" "}
                    </h2>
                  </div>
                </div>
                <div className="h-1/2">
                  <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    Catch up on all the project overview
                  </p>
                  cc
                  <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">
                    Watch me
                  </button>
                </div>
              </div>
            </p>
          </div>
          <div className="blogCardContainer">
            <p className="h-72 md:h-96 block group relative md:mx-2 overflow-hidden">
              <img
                alt=""
                src="https://storage.ning.com/topology/rest/1.0/file/get/12304910858?profile=RESIZE_710x"
                className="absolute z-0 object-cover w-full h-72 md:h-96"
              />
              <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
              <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                <div className="h-1/2 relative">
                  <div className="absolute bottom-0">
                    <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
                      Vast Improvements to Latest Activity in Surveyor Community
                    </h2>
                  </div>
                </div>
                <div className="h-1/2">
                  <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    You can now easily post to any section of the website from
                    one place.
                  </p>
                  <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">
                    Read More
                  </button>
                </div>
              </div>
            </p>
          </div>
          <div className="blogCardContainer">
            <p className="h-72 md:h-96 block group relative md:mx-2 overflow-hidden">
              <img
                alt=""
                src="https://storage.ning.com/topology/rest/1.0/file/get/12224387295?profile=original"
                className="absolute z-0 object-cover w-full h-72 md:h-96"
              />
              <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
              <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                <div className="h-1/2 relative">
                  <div className="absolute bottom-0">
                    <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
                      New homes in England to have electric car chargers by law
                    </h2>
                  </div>
                </div>
                <div className="h-1/2">
                  <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    Almost 100 new tools added to the commuity for Land
                    Surveyors
                  </p>
                  <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">
                    Read More
                  </button>
                </div>
              </div>
            </p>
          </div>
          <div className="blogCardContainer">
            <p className="h-72 md:h-96 block group relative md:mx-2 overflow-hidden">
              <img
                alt=""
                src="https://storage.ning.com/topology/rest/1.0/file/get/12237787697?profile=original"
                className="absolute z-0 object-cover w-full h-72 md:h-96"
              />
              <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
              <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                <div className="h-1/2 relative">
                  <div className="absolute bottom-0">
                    <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
                      Six million Sky routers had serious security flaw
                    </h2>
                  </div>
                </div>
                <div className="h-1/2">
                  <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    About six million Sky routers had a significant software bug
                    that could have allowed hackers to take over home networks.
                  </p>
                  <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">
                    Read More
                  </button>
                </div>
              </div>
            </p>
          </div>
        </div>
        <br />
        <br />

        <div className="blogWrapperContainer">
          <div className="w-full">
            <div className="md:mx-4">
              <h2 className="border-b-2 border-red-600 mb-4">
                <span className="bg-red-600 px-2 py-1 text-white uppercase tracking-wide">
                  blogs
                </span>
              </h2>
              <div className="flex flex-wrap items-center md:-mx-2">
                <div className="w-full md:w-3/12">
                  <div className="md:mx-2">
                    <img
                      alt=""
                      src="https://storage.ning.com/topology/rest/1.0/file/get/12237783466?profile=original"
                      className="w-full mb-4 md:mb-0"
                    />
                  </div>
                </div>
                <div className="md:w-9/12">
                  <div className="md:mx-2">
                    <h2 className="text-white font-bold text-2xl pb-4 leading-tight">
                      <p className="text-white hover:underline">
                        Land Surveyor Mentorship
                      </p>
                    </h2>
                    <p className="text-gray-400 pb-2">
                      Our community is committed to bringing both perspectives
                      of both the new school and the old school. Together we are
                      harmonizing the surveying profession worldwide, in our own
                      way.{" "}
                    </p>
                    <div className="text-gray-200 inline-block py-1 italic text-sm">
                      Posted on:{" "}
                      <time datetime="2021-11-19 20:00">November 19, 2021</time>{" "}
                      by{" "}
                      <p className="underline hover:no-underline">
                        Stephen Ainsworth
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-5 pb-5 border-b border-gray-700 md:mx-2"></div>
              </div>
              <div className="flex flex-wrap items-center md:-mx-2">
                <div className="w-full md:w-3/12">
                  <div className="md:mx-2">
                    <img
                      alt=""
                      src="https://storage.ning.com/topology/rest/1.0/file/get/12218086256?profile=RESIZE_1200x&width=1000"
                      className="w-full mb-4 md:mb-0"
                    />
                  </div>
                </div>
                <div className="md:w-9/12">
                  <div className="md:mx-2">
                    <h2 className="text-white font-bold text-2xl pb-4 leading-tight">
                      <p className="text-white hover:underline">
                        Helpful Checklists for Land Surveyors (Boundary,
                        Staking, Level Loop, GPS RTK){" "}
                      </p>
                    </h2>
                    <p className="text-gray-400 pb-2">
                      Fact-checking organisations around the world say that
                      YouTube is not doing enough to prevent the spread of
                      misinformation on the platform.
                    </p>
                    <div className="text-gray-200 inline-block py-1 italic text-sm">
                      Posted on:{" "}
                      <time datetime="2021-11-19 20:00">November 19, 2021</time>{" "}
                      by{" "}
                      <p className="underline hover:no-underline">
                        Stephen Ainsworth
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-5 pb-5 border-b border-gray-700 md:mx-2"></div>
              </div>
              <div className="flex flex-wrap items-center md:-mx-2">
                <div className="w-full md:w-3/12">
                  <div className="md:mx-2">
                    <img
                      alt=""
                      src="https://storage.ning.com/topology/rest/1.0/file/get/12237776285?profile=RESIZE_584x"
                      className="w-full mb-4 md:mb-0"
                    />
                  </div>
                </div>
                <div className="md:w-9/12">
                  <div className="md:mx-2">
                    <h2 className="text-white font-bold text-2xl pb-4 leading-tight">
                      <p className="text-white hover:underline">
                        Land Surveyor Tools & Resources
                      </p>
                    </h2>
                    <p className="text-gray-400 pb-2">
                      The US Federal Trade Commission (FTC) has been given the
                      go-ahead to take Facebook to court over anti-trust rules.
                    </p>
                    <div className="text-gray-200 inline-block py-1 italic text-sm">
                      Posted on:{" "}
                      <time datetime="2021-11-19 20:00">November 19, 2021</time>{" "}
                      by{" "}
                      <p className="underline hover:no-underline">
                        Stephen Ainsworth
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-5 pb-5 border-b border-gray-700 md:mx-2"></div>
              </div>
              <div className="flex flex-wrap items-center md:-mx-2">
                <div className="w-full md:w-3/12">
                  <div className="md:mx-2">
                    <img
                      alt=""
                      src="https://storage.ning.com/topology/rest/1.0/file/get/12237776861?profile=RESIZE_584x"
                      className="w-full mb-4 md:mb-0"
                    />
                  </div>
                </div>
                <div className="md:w-9/12">
                  <div className="md:mx-2">
                    <h2 className="text-white font-bold text-2xl pb-4 leading-tight">
                      <p className="text-white hover:underline">
                        Virgin Mobile and O2 users will not face EU roaming
                        charges
                      </p>
                    </h2>
                    <p className="text-gray-400 pb-2">
                      Virgin Mobile and O2 phone users will not face roaming
                      charges following announcements by other networks to
                      reintroduce extra fees after Brexit.
                    </p>
                    <div className="text-gray-200 inline-block py-1 italic text-sm">
                      Posted on:{" "}
                      <time datetime="2021-11-19 20:00">November 19, 2021</time>{" "}
                      by{" "}
                      <p className="underline hover:no-underline">
                        Stephen Ainsworth
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-5 pb-5 border-b border-gray-700 md:mx-2"></div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="md:mx-4">
              <h2 className="border-b-2 border-indigo-600 mb-4">
                <span className="bg-indigo-600 px-2 py-1 text-white uppercase tracking-wide">
                  Clients posts
                </span>
              </h2>
              <ClientsPosts />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
