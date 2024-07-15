// index.js
const express = require("express");
const app = express();
const cors = require("cors");
const jwtSecret = "yourSecretKeyHere";
const {
  getAllCategories,
  getAllFolders,
  insertFoldersWithSubfolders,
  getSubFoldersByFolderName,
  addSource,
  getAllSource,
  addRequestUsers,
  getAllRequestUsers,
  acceptUser,
  viewUser,
  deleteUser,
  loginUser,
  addService,
  getAllServices,
  viewAllSource,
  getAllPermissons,
  getAllAdminUsers,
  createUserChat,
  getSelectedUser,
  createChat,
  getChats,
  loginUserChat,
  getAllSelectedAdminById,
  addClientUser,
  getAllSourceLandingPagee,
  createComment,
  getAllComments,
  checkClientCodeExist,
  getAllClienUsers,
  addClientSources,
  getClientSources,
  addBlog,
  getAllBlogs,
  addLikesCommentsAndDislikes,
  getAllStills,
  updateSourceToDisplayInLandingPage,
  createPost,
  getAllClientPosts,
  deleteSource,
  getAdminSource,
  deleteSourceFromTheTable
} = require("./gallery/gallery.query");

app.use(cors());
// Set maximum payload size limit for JSON requests
app.use(express.json({ limit: "10000000mb" }));

// Set maximum payload size limit for URL-encoded requests
app.use(express.urlencoded({ limit: "10000000mb", extended: true }));

getAllCategories(app); // Pas as an argument to getAllCategories
getAllFolders(app);
insertFoldersWithSubfolders(app);
getSubFoldersByFolderName(app);
addSource(app);
getAllSource(app);
addRequestUsers(app, jwtSecret);
getAllRequestUsers(app);
acceptUser(app);
viewUser(app);
deleteUser(app);
loginUser(app, jwtSecret);
addService(app);
getAllServices(app);
viewAllSource(app);
getAllPermissons(app);
getAllAdminUsers(app);
createUserChat(app, jwtSecret);
getSelectedUser(app);
createChat(app);
getChats(app);
loginUserChat(app, jwtSecret);
getAllSelectedAdminById(app);
addClientUser(app);
getAllSourceLandingPagee(app);
createComment(app);
getAllComments(app);
checkClientCodeExist(app);
getAllClienUsers(app);
addClientSources(app);
getClientSources(app);
addBlog(app);
getAllBlogs(app);
addLikesCommentsAndDislikes(app);
getAllStills(app);
updateSourceToDisplayInLandingPage(app);
createPost(app);
getAllClientPosts(app);
deleteSource(app)
getAdminSource(app)
deleteSourceFromTheTable(app)

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
