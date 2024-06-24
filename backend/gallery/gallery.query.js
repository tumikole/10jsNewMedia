const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");
const { v4 } = require("uuid");

const supabaseUrl = "https://rqufzhhcewwjafsuxipv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdWZ6aGhjZXd3amFmc3V4aXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MjEyODUsImV4cCI6MjAyNjQ5NzI4NX0.zh8JWJmTq9kQxbsBTakBcS2shXgVvOTq6lZV_pUGxu0";

const supabase = createClient(supabaseUrl, supabaseKey);

const getAllCategories = (app) => {
  app.get("/get_all_categories", async (req, res) => {
    try {
      const { data, error } = await supabase.from("category").select();
      if (data) {
        res.json({ categories: data });
      }
      if (error) {
        res.json({ error: "Error retrieving categories" });
      }
    } catch (error) {
      console.error("Error retrieving categories:", error);

      res
        .status(500)
        .json({ error: "An error occurred while retrieving categories" });
    }
  });
};

const getAllFolders = (app) => {
  app.get("/get_all_folders", async (req, res) => {
    try {
      const { data, error } = await supabase.from("folders").select();
      if (data) {
        res.json({ folders: data });
      } else if (error) {
        res.json({ error, message: "Failed to retrieve folders" });
      }
    } catch (error) {
      console.error("Error retrieving folders:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving categories" });
    }
  });
};

const getSubFoldersByFolderName = (app) => {
  app.get("/subfolders/:folderName", async (req, res) => {
    const folderName = req.params.folderName;
    try {
      // Query data from Supabase using the 'eq' method
      const { data, error } = await supabase
        .from("folders")
        .select()
        .eq("folder_name", folderName);
      if (data) {
        res.json({
          subFoldersByFolderName: data,
          message: "Successfully retrieved sub-folders",
        });
      } else if (error) {
        res.json({ error: "Error retrieving sub-folders" });
      } else {
        res.json([]);
      }
    } catch (e) {
      console.error("Error executing query", e);
      res.status(500).send("Internal server error");
    }
  });
};

const insertFoldersWithSubfolders = (app) => {
  // app.post("/add_folders", async (req, res) => {
  //   const { folder_name, subfolders } = req.body;
  //   try {
  //     const { data, error } = await supabase
  //     .from("folders")
  //     const queryStatement = `
  //       INSERT INTO folders (folder_name, subfolders, created_at)
  //       VALUES (
  //         '${folder_name}',
  //         ARRAY[${subfolders
  //           .map((item) => `'${JSON.stringify(item)}'::jsonb`)
  //           .join(", ")}]::jsonb[],
  //         CURRENT_TIMESTAMP
  //       )
  //     `;
  //     const response = await client.query(queryStatement);
  //     res
  //       .status(200)
  //       .json({ success: true, message: "Folders inserted successfully" });
  //   } catch (error) {
  //     // Release the client in case of an error
  //     console.error("Error:", error);
  //     res.status(500).json({
  //       success: false,
  //       error: "An error occurred while inserting folders",
  //     });
  //   }
  // });
};

const addSource = (app) => {
  app.post("/add_source", async (req, res) => {
    const {
      srcName,
      src,
      folder,
      subFolderName,
      category,
      source_description,
      photographer,
    } = req.body;
    try {
      if (
        srcName ||
        src ||
        folder ||
        subFolderName ||
        category ||
        source_description ||
        photographer
      ) {
        const { data, error } = await supabase
          .from("source")
          .insert([
            {
              source_name: srcName,
              src_bucket_id: src,
              folder: folder,
              sub_folder: subFolderName,
              category: category,
              source_description: source_description,
              photographer: photographer,
              home_page_flag: false,
              isApproved: false,
            },
          ])
          .select();
        if (data) {
          res.status(201).json({
            success: true,
            data: data,
            message: "Source added successfully",
          });
        } else if (error) {
          if (error.code === "54000") {
            // Index row size error
            res.status(400).json({
              success: false,
              message:
                "Data size exceeds maximum limit, please reduce the size of the data",
            });
          } else {
            // Other database errors
            res.status(500).json({
              success: false,
              error: error.message || "Failed to add source",
            });
          }
        }
      } else {
        res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to add source",
      });
    }
  });
};

const getAllSource = (app) => {
  app.get("/get_all_source/:category", async (req, res) => {
    try {
      const { category } = req.params;

      const { data, error } = await supabase
        .from("source")
        .eq("category", category);
      if (data) {
        res.json({ response: data });
      }
      if (error) {
        res.json({ Message: "An error occurred while retrieving source" });
      }
    } catch (error) {
      console.error("Error retrieving source:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving source" });
    }
  });
};

const getAllSourceLandingPagee = (app) => {
  app.get("/get_all_landing", async (req, res) => {
    // try {
    //   const { data, error } = await supabase
    //     .from("source")
    //     .eq("category", "Stills");
    //   if (data) {
    //     res.json({ response: data });
    //   }
    //   if (error) {
    //     res.json({ Message: "An error occurred while retrieving source" });
    //   }
    // } catch (error) {
    //   console.error("Error retrieving source:", error);
    //   res
    //     .status(500)
    //     .json({ error: "An error occurred while retrieving source" });
    // }
  });
};
////////////////////////////////////
const getAllStills = (app) => {
  app.get("/get_all_stills/", async (req, res) => {
    try {
      const client = getClient();
      const response = await client.query(
        `SELECT * FROM source WHERE category = 'Stills'`
      );
      res.json({ response: response.rows });
    } catch (error) {
      console.error("Error retrieving source:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving source" });
    }
  });
};

// const getAllMotionPictures = (app, getClient) => {
//   app.get("/get_all_motion_pictures/", async (req, res) => {
//     try {
//       const client = getClient();
//       const response = await client.query(
//         `SELECT * FROM source WHERE category = 'Motion Pictures'`
//       );
//       console.log({ res: response.rows });
//       res.json({ response: response.rows });
//     } catch (error) {
//       console.error("Error retrieving source:", error);
//       res
//         .status(500)
//         .json({ error: "An error occurred while retrieving source" });
//     }
//   });
// };

// const getAllSourceLandingPagee = (app, getClient) => {
//   app.get("/get_all_source_landing_page/", async (req, res) => {
//     console.log("fsdf")
//     try {
//       const client = getClient();
//       const response = await client.query(
//         `SELECT * FROM source WHERE category = 'Stills' AND home_page_flag = false`
//       );
//       console.log({ res: response.rows });
//       res.json({ response: response.rows });
//     } catch (error) {
//       console.error("Error retrieving source:", error);
//       res
//         .status(500)
//         .json({ error: "An error occurred while retrieving source" });
//     }
//   });
// };

const updateSourceToDisplayInLandingPage = (app) => {
  app.put("/update_landing_page_source/:id", async (req, res) => {
    try {
      const source_id = req.params.id; // Moved this line down
      const { checked } = req.query;
      const home_page_flag = checked === "true"; // Convert string to boolean

      const { data, error } = await supabase
        .from("source")
        .update({ home_page_flag: home_page_flag })
        .eq("id", source_id);

      if (data) {
        res.json({ response: data });
      }
      if (error) {
        res.json({ Message: "An error occurred while retrieving source" });
      }
    } catch (error) {
      console.error("Error updating source:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating source" });
    }
  });
};
/////////////////////////////////////////////Start here///////////////////////////////////////////////////////////////////
const addRequestUsers = (app) => {
  app.post("/request_users", async (req, res) => {
    const clientCode = v4();
    console.log({clientCode})
    try {
      const {
        firstName,
        lastName,
        email,
        avatar = null,
        role,
        permissions,
        status = false,
        clientCodeStatus = false,
      } = req.body;



      console.log(
        {request: req.body})
      let table;
      let existingUsers;

      // Check if role is "Client"
      if (role === "Client") {
        table = "client_user";
        // Query to check if a user with the same email already exists in client_user table
        existingUsers = await supabase
          .from(table)
          .select("*")
          .eq("email", email)
          .select();
      } else {
        table = "admin_user";
        // Query to check if a user with the same email already exists in admin_user table
        existingUsers = await supabase
          .from(table)
          .select("*")
          .eq("email", email)
          .select();
      }
      // If a user with the same email already exists, return an error
      if (existingUsers.data.length > 0) {
        return res.status(400).json({
          success: false,
          error: "User with this email already exists",
        });
      }

      // Insert the new user
      const { data: result, error } = await supabase.from(table).insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          avatar,
          role: role,
          ...(role === "Client" && {
            client_code: clientCode,
            permissions: permissions,
            status: status,
            client_code_verified: clientCodeStatus,
          }),
          ...(role !== "Client" && {
            permissions: permissions,
            status: false,
          }),
          created_at: new Date(),
        },
      ]);
      if (error) {
        throw error;
      }

      // Return a success response
      res.status(201).json({
        success: true,
        data: result,
        message: "User successfully added",
      });
    } catch (error) {
      // Return an error response if an exception occurs
      console.error("Error:", error);
      res.status(500).json({ success: false, error: "Failed to add user" });
    }
  });
};

const getAllRequestUsers = (app) => {
  app.get("/request_users", async (req, res) => {
    try {
      const { data: result, error } = await supabase
        .from("admin_user")
        .select();

      if (error) {
        throw error;
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Retrieved users successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to retrieve users" });
    }
  });
};

const getAllClienUsers = (app) => {
  app.get("/request_client_users", async (req, res) => {
    try {
      const { data: result, error } = await supabase
        .from("client_user")
        .select();

      if (error) {
        throw error;
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Retrieved users successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to retrieve users" });
    }
  });
};

const acceptUser = (app) => {
  app.put("/accept_user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;

      const { data: result, error } = await supabase
        .from("admin_user")
        .select("*")
        .eq("email", userId)
        .eq("status", true);

      if (error) {
        throw error;
      }

      res.status(200).json({
        result,
        success: true,
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to update user status" });
    }
  });
};

const viewUser = (app) => {
  app.get("/view_user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;

      const { data: result, error } = await supabase
        .from("admin_user")
        .select("*")
        .eq("id", userId);

      if (error) {
        throw error;
      }

      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: `User with ID ${userId} not found.`,
        });
      }

      res.status(200).json({
        success: true,
        data: result[0],
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to retrieve user" });
    }
  });
};

const deleteUser = (app) => {
  app.delete("/delete_user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;

      // Check if the user exists in admin_user table
      const { data: adminUser, error: adminError } = await supabase
        .from("admin_user")
        .select()
        .eq("id", userId);

      // Check if the user exists in client_user table
      const { data: clientUser, error: clientError } = await supabase
        .from("client_user")
        .select()
        .eq("id", userId);

      let deletedUser;
      let tableName;

      // Determine the table from which the user will be deleted
      if (adminUser && adminUser.length > 0) {
        deletedUser = adminUser[0];
        tableName = "admin_user";
      } else if (clientUser && clientUser.length > 0) {
        deletedUser = clientUser[0];
        tableName = "client_user";
      } else {
        return res
          .status(404)
          .json({ success: false, error: "User not found" });
      }

      // Delete the user from the appropriate table
      const { data: deletedData, error: deleteError } = await supabase
        .from(tableName)
        .delete()
        .eq("id", userId)
        .select();

      if (deleteError) {
        throw deleteError;
      }

      res.status(200).json({
        deletedUser: deletedData,
        success: true,
        message: `User with ID ${userId} has been deleted from ${tableName}.`,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, error: "Failed to delete user" });
    }
  });
};

const loginUser = (app, jwtSecret) => {
  app.post("/login", async (req, res) => {
    try {
      const { email,   } = req.body;

      // Query admin users
      const { data: adminUsers, error: adminError } = await supabase
        .from("admin_user")
        .select("*")
        .eq("email", email);
      if (adminError) {
        throw adminError;
      }

      // Query client users
      const { data: clientUsers, error: clientError } = await supabase
        .from("client_user")
        .select("*")
        .eq("email", email);

      if (clientError) {
        throw clientError;
      }

      // Combine both admin and client users
      const users = adminUsers.concat(clientUsers);

      if (users.length === 0) {
        return res
          .status(404)
          .json({ success: false, error: "User not found" });
      }

      // Check passwords, update if null, and login
      for (const user of users) {
        // Check if password is null
        if (user.password === "") {
          const hashedPassword = await bcrypt.hash(password, 10);
          if (user.role !== "Client") {
            await supabase
              .from("admin_user")
              .update({ password: hashedPassword, status: true })
              .eq("id", user.id);
          } else {
            await supabase
              .from("client_user")
              .update({ password: hashedPassword, status: true })
              .eq("id", user.id);
          }
        } else {
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return res
              .status(401)
              .json({ success: false, error: "Incorrect password" });
          }
        }
      }

      // Create JWT token
      const token = jwt.sign(
        { userId: users[0].id, role: users[0].role },
        jwtSecret,
        { expiresIn: "1h" }
      );

      // Return successful login response
      return res.status(200).json({
        user: users[0],
        success: true,
        token: token,
        message: "Login successful",
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ success: false, error: "Login failed" });
    }
  });
};

const addService = (app) => {
  app.post("/create_service", async (req, res) => {
    try {
      const { serviceImage, title, serviceList, price, creator } = req.body;

      // Check if service with the same title already exists
      const { data: existingServices, error: serviceError } = await supabase
        .from("admin_price_and_services")
        .select()
        .eq("title", title);

      if (serviceError) {
        throw serviceError;
      }

      if (existingServices.length > 0) {
        return res.status(400).json({
          success: false,
          error: "Service title already exists",
        });
      }

      // Insert the new service into admin_price_and_services table
      const { data: serviceResult, error: insertError } = await supabase
        .from("admin_price_and_services")
        .insert([
          {
            service_image: serviceImage,
            title: title,
            service_list: serviceList,
            price: price,
            creator: creator,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      res.status(201).json({
        success: true,
        data: serviceResult,
        message: "Service added successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, error: "Failed to add service" });
    }
  });
};

const getAllServices = (app) => {
  app.get("/get_all_services", async (req, res) => {
    try {
      const { data: services, error } = await supabase
        .from("admin_price_and_services")
        .select();
      if (error) {
        throw error;
      }

      res.status(200).json({
        success: true,
        data: services,
        message: "Retrieved all services successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to retrieve services" });
    }
  });
};

const getAllPermissons = (app) => {
  app.get("/get_all_permissions", async (req, res) => {
    try {
      // Query all permissions from the user_permissions table
      const { data: permissions, error } = await supabase
        .from("user_permissions")
        .select("*");

      res.status(200).json({
        success: true,
        data: permissions,
        message: "Retrieved all permissions successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to retrieve permissions" });
    }
  });
};

const viewAllSource = (app) => {
  app.get("/view_all_source", async (req, res) => {
    try {
      // Query all sources from the source table
      const { data: sources, error } = await supabase.from("source").select();

      if (error) {
        throw error;
      }

      res.status(200).json({ response: sources });
    } catch (error) {
      console.error("Error retrieving source:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving source" });
    }
  });
};

const getAllAdminUsers = (app) => {
  app.get("/admin_users", async (req, res) => {
    try {
      // Query all admin users from the admin_user table where status is true
      const { data: adminUsers, error } = await supabase
        .from("admin_user")
        .select("*")
        .eq("status", true);

      if (error) {
        throw error;
      }

      res.status(200).json({
        success: true,
        data: adminUsers,
        message: "Retrieved users successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to retrieve users" });
    }
  });
};

const createUserChat = (app, jwtSecret) => {
  // app.post("/create_chat_user", async (req, res) => {
  //   const { userName, userEmail, userPassword, userConfirmPassword, userFile } =
  //     req.body;
  //   try {
  //     if (userPassword !== userConfirmPassword) {
  //       return res
  //         .status(400)
  //         .json({ success: false, error: "Passwords do not match" });
  //     }
  //     const hashedPassword = await bcrypt.hash(userPassword, 10); // Hash the password
  //     const client = getClient();
  //     // Check if user with the same email already exists
  //     const emailExistsQuery = `
  //       SELECT *
  //       FROM register_chat_user
  //       WHERE user_email = $1;
  //     `;
  //     const emailExistsResult = await client.query(emailExistsQuery, [
  //       userEmail,
  //     ]);
  //     if (emailExistsResult.rows.length > 0) {
  //       return res.json({
  //         success: false,
  //         error: "User with this email already exists",
  //       });
  //     }
  //     const result = await client.query(
  //       "INSERT INTO register_chat_user (user_name, user_email, user_password, user_file) VALUES ($1, $2, $3, $4) RETURNING *",
  //       [userName, userEmail, hashedPassword, userFile]
  //     );
  //     const user = result.rows[0];
  //     if (user) {
  //       const token = jwt.sign({ userId: user.id }, jwtSecret, {
  //         expiresIn: "1h",
  //       });
  //       res.status(200).json({
  //         data: user,
  //         success: true,
  //         message: "User created successfully",
  //         token,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     res.status(500).json({ success: false, error: "Failed to create user" });
  //   }
  // });
};

const loginUserChat = (app, jwtSecret) => {
  // app.post("/user_chat_login", async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
  //     const client = getClient();
  //     // Check if user with provided email exists
  //     const userQuery = `
  //       SELECT *
  //       FROM register_chat_user
  //       WHERE user_email = $1
  //     `;
  //     const userResult = await client.query(userQuery, [email]);
  //     if (userResult.rows.length === 0) {
  //       return res.json({ success: false, error: "User not found" });
  //     }
  //     const user = userResult.rows[0];
  //     // Compare provided password with hashed password from the database
  //     const passwordMatch = await bcrypt.compare(password, user.user_password);
  //     if (!passwordMatch) {
  //       return res
  //         .status(401)
  //         .json({ success: false, error: "Incorrect password" });
  //     }
  //     // If email and password match, create JWT token
  //     const token = jwt.sign({ userId: user.id }, jwtSecret, {
  //       expiresIn: "1h",
  //     });
  //     res.status(200).json({
  //       user,
  //       success: true,
  //       token: token,
  //       message: "Login successful",
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     res.status(500).json({ success: false, error: "Login failed" });
  //   }
  // });
};

const getSelectedUser = (app) => {
  app.get("/selected_admin/:userId", async (req, res) => {
    try {
      const { userId } = req.params;

      // Query the selected admin user from the admin_user table
      const { data: selectedUser, error } = await supabase
        .from("admin_user")
        .select("*")
        .eq("id", userId);

      if (error) {
        throw error;
      }

      if (!selectedUser || selectedUser.length === 0) {
        return res.status(404).json({
          success: false,
          message: `User with ID ${userId} not found.`,
        });
      }

      res.status(200).json({
        result: selectedUser[0],
        success: true,
        message: `User successfully selected`,
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to retrieve user" });
    }
  });
};

const createChat = (app) => {
  // app.post("/chats/", async (req, res) => {
  //   try {
  //     const client = getClient();
  //     const { senderId, receiverId, message } = req.body;
  //     // console.log({ senderId, receiverId, message });
  //     // Insert the new chat message into the database
  //     await client.query(
  //       "INSERT INTO chat (sender_id, receiver_id, message) VALUES ($1, $2, $3)",
  //       [senderId, receiverId, message]
  //     );
  //     // Send a success response
  //     res
  //       .status(200)
  //       .json({ success: true, message: "Chat message sent successfully" });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     res.status(500).json({
  //       success: false,
  //       error: "An error occurred while sending the chat message",
  //     });
  //   }
  // });
};

const getAllSelectedAdminById = (app) => {
  app.get("/get_selected_admin/:userId", async (req, res) => {
    try {
      const { userId } = req.params;

      // Query the selected admin user from the admin_user table
      const { data: selectedAdmin, error } = await supabase
        .from("admin_user")
        .select("*")
        .eq("id", userId);

      if (error) {
        throw error;
      }

      if (!selectedAdmin || selectedAdmin.length === 0) {
        return res.status(404).json({
          success: false,
          message: `Admin user with ID ${userId} not found.`,
        });
      }

      res.status(200).json({
        result: selectedAdmin[0],
        success: true,
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to retrieve user" });
    }
  });
};

const getChats = (app) => {
  // app.get("/get_user_chats/:senderId/:receiverId", async (req, res) => {
  //   try {
  //     const { senderId, receiverId } = req.params;
  //     const client = getClient();
  //     // Retrieve chat messages from the database for the specified sender and receiver
  //     const result = await client.query(
  //       "SELECT * FROM chat WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1)",
  //       [senderId, receiverId]
  //     );
  //     const chats = result.rows;
  //     // Send the chat messages as a response
  //     res.status(200).json({ success: true, chats });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     res.status(500).json({
  //       success: false,
  //       error: "An error occurred while fetching chat messages",
  //     });
  //   }
  // });
};

const addClientUser = (app) => {
  app.post("/add_client_user", async (req, res) => {
    const { client_name, client_last_name, client_email, client_promo_code } =
      req.body;
    try {
      // Insert the client user into the client_user table
      const { data: clientUser, error } = await supabase
        .from("client_user")
        .insert({
          client_name,
          client_last_name,
          client_email,
          client_promo_code,
          status: false, // setting status to false by default
        })
        .single(); // Assuming you expect a single result

      if (error) {
        throw error;
      }

      res.status(201).json({
        success: true,
        data: clientUser,
        message: "Client user added successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to add client user" });
    }
  });
};

const createComment = (app) => {
  app.post("/comments/", async (req, res) => {
    try {
      const { title, comment } = req.body;

      // Insert the new comment into the comments table
      const { error } = await supabase
        .from("comments")
        .insert([{ title, comment }]);

      if (error) {
        throw error;
      }

      // Send a success response
      res
        .status(200)
        .json({ success: true, message: "Comment added successfully" });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({
        success: false,
        error: "An error occurred while adding the comment",
      });
    }
  });
};

const getAllComments = (app) => {
  app.get("/comments/", async (req, res) => {
    try {
      // Retrieve all comments from the comments table
      const { data: comments, error } = await supabase
        .from("comments")
        .select("*");

      if (error) {
        throw error;
      }

      // Send a success response with all comments
      res.status(200).json({ success: true, comments });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({
        success: false,
        error: "An error occurred while retrieving comments",
      });
    }
  });
};

const checkClientCodeExist = (app) => {
  app.post("/verify_client_code", async (req, res) => {
    const { email, code } = req.body;

    try {
      // Retrieve client user data from Supabase
      const { data: clientUsers, error } = await supabase
        .from("client_user")
        .select()
        .eq("email", email); // Assuming there's only one client user with the given email
      if (error) {
        throw error;
      }
      if (clientUsers) {
        const clientData = clientUsers;

        if ((clientData.client_code === code, code)) {
          // Update client code verification status in Supabase
          await supabase
            .from("client_user")
            .update({ client_code_verified: true })
            .eq("email", email)
            .single();
          res.json({ codeMatched: true, message: "Client code verified" });
        } else {
          res.json({ codeMatched: false });
        }
      } else {
        res.status(404).json({ message: "Client not found" });
      }
    } catch (error) {
      console.error("Error verifying client code:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  });
};

const addClientSources = (app) => {
  app.post("/add_client_source", async (req, res) => {
    const { email, code, fileType, files } = req.body;
    try {
      if (fileType === "images" || fileType === "videos") {
        // Retrieve existing client source data from Supabase
        const { data: existingUser, error } = await supabase
          .from("client_sources")
          .select("*")
          .eq("email", email)
          .eq("file_type", fileType)
          .single();

        if (error) {
          throw error;
        }

        if (existingUser) {
          const userClientCode = existingUser.client_code;

          if (userClientCode === code) {
            const existingFiles = existingUser.files || [];
            const mergedFiles = existingFiles.concat(files);

            // Update existing client source data in Supabase
            const { data: updateResult, error: updateError } = await supabase
              .from("client_sources")
              .update({ files: mergedFiles })
              .eq("email", email)
              .eq("file_type", fileType)
              .single();

            if (updateError) {
              throw updateError;
            }

            res.status(200).json({
              success: true,
              data: updateResult,
              message: "Files successfully added to existing user",
            });
          } else {
            res.status(400).json({
              success: false,
              error: "ClientCode does not match the user's clientCode",
            });
          }
        } else {
          // Insert new client source data into Supabase
          const { data: result, error: insertError } = await supabase
            .from("client_sources")
            .insert([{ email, client_code: code, file_type: fileType, files }]);

          if (insertError) {
            throw insertError;
          }

          res.status(201).json({
            success: true,
            data: result,
            message: "Files successfully uploaded for a new user",
          });
        }
      } else {
        res.status(400).json({
          success: false,
          error: "Invalid file type",
        });
      }
    } catch (error) {
      console.error("Error processing data:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  });
};

const getClientSources = (app) => {
  app.get("/get_client_source", async (req, res) => {
    const { email, code, fileType } = req.query;

    try {
      // Retrieve client user data from Supabase
      const { data: existingUser, error } = await supabase
        .from("client_sources")
        .select("*")
        .eq("email", email)
        .single(); // Assuming there's only one client user with the given email

      if (error) {
        throw error;
      }

      if (existingUser) {
        const user = existingUser;
        const userClientCode = user.client_code;

        // Check if clientCode matches the user's clientCode
        if (userClientCode === code) {
          // If clientCode matches, retrieve files based on fileType
          const { data: filesByType, error: filesError } = await supabase
            .from("client_sources")
            .select("*")
            .eq("email", email)
            .eq("file_type", fileType);

          if (filesError) {
            throw filesError;
          }

          res.status(200).json({
            success: true,
            data: filesByType,
            message: "Files successfully retrieved",
          });
        } else {
          // If clientCode doesn't match the user's clientCode, return an error
          res.status(400).json({
            success: false,
            error: "ClientCode does not match the user's clientCode",
          });
        }
      } else {
        // If user doesn't exist, return an error
        res.status(404).json({
          success: false,
          error: "User not found with the provided email",
        });
      }
    } catch (error) {
      console.error("Error retrieving files:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  });
};

const addBlog = (app) => {
  app.post("/add_blog", async (req, res) => {
    const {
      authorAvatar,
      image,
      title,
      description,
      author,
      like,
      dislike,
      comment,
    } = req.body;

    try {
      // Insert the blog data into the 'blog' table using Supabase
      const { data, error } = await supabase.from("blog").insert([
        {
          blog_admin_avatar: authorAvatar,
          blog_image: image,
          blog_title: title,
          blog_description: description,
          blog_author: author,
          blog_like: like,
          blog_dislike: dislike,
          blog_comment: comment,
        },
      ]);

      if (error) {
        throw error;
      }

      // Send success response
      res.status(200).json({ message: "Blog added successfully" });
    } catch (error) {
      console.error("Error adding blog:", error.message);
      // Send error response
      res.status(500).json({ error: "Internal server error" });
    }
  });
};

const getAllBlogs = (app) => {
  app.get("/blogs/", async (req, res) => {
    try {
      // Retrieve all blogs from the 'blog' table using Supabase
      const { data: blogs, error } = await supabase.from("blog").select("*");

      if (error) {
        throw error;
      }

      // Send the blogs data as JSON response
      res.status(200).json(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
      res.status(500).json({ error: "Failed to fetch blogs" });
    }
  });
};

const addLikesCommentsAndDislikes = (app) => {
  app.post("/blogs_action_buttons/", async (req, res) => {
    const { blogId, action, comment } = req.body;

    try {
      // Perform the action based on the provided parameters
      if (action === "like") {
        // Increment likes for the specified blogId
        const { data: updatedBlog, error } = await supabase
          .from("blog")
          .update({ blog_like: supabase.sql("blog_like + 1") })
          .eq("blog_id", blogId)
          .single();

        if (error) {
          throw error;
        }

        res.json({
          message: "Likes, dislikes, and comments updated successfully",
          blog: updatedBlog,
        });
      } else if (action === "dislike") {
        // Increment dislikes for the specified blogId
        await supabase
          .from("blog")
          .update({ blog_dislike: supabase.sql("blog_dislike + 1") })
          .eq("blog_id", blogId);

        res.json({
          message: "Likes, dislikes, and comments updated successfully",
        });
      } else if (comment) {
        // Append comment to the comments array for the specified blogId
        await supabase
          .from("blog")
          .update({
            blog_comment: supabase.sql("array_append(blog_comment, $1)"),
          })
          .eq("blog_id", blogId)
          .setParam(1, comment);

        res.json({
          message: "Likes, dislikes, and comments updated successfully",
        });
      } else {
        res.status(400).json({ error: "Invalid action" });
      }
    } catch (error) {
      console.error(
        "Error updating likes, dislikes, and comments:",
        error.message
      );
      res
        .status(500)
        .json({ error: "Failed to update likes, dislikes, and comments" });
    }
  });
};

const createPost = (app) => {
  app.post("/posts", async (req, res) => {
    try {
      const { adminAvatar, username, post } = req.body;

      // Check if the username already exists
      const { data: existingPost, error: usernameExistsError } = await supabase
        .from("post")
        .select()
        .eq("username", username)
        .single(); // Use .single() to ensure only one record is returned

      let result;
      if (existingPost) {
        const mergedPost = [...existingPost.post, post];
        let updatedPost;
        if (existingPost.username) {
          updatedPost = await supabase
            .from("post")
            .update({ post: mergedPost })
            .eq("username", existingPost.username)
            .select();
        } else {
          // If the existing post has no ID, there's likely a data inconsistency
          throw new Error("Existing username dows not exist");
        }

        if (updatedPost.error) {
          throw updatedPost.error;
        }

        result = updatedPost.data;
      } else {
        // If username does not exist, insert the new post
        const { data: newPost, error: insertPostError } = await supabase
          .from("post")
          .insert([{ post_image: adminAvatar, username, post: post }])
          .select();

        if (insertPostError) {
          throw insertPostError;
        }

        result = newPost;
      }

      res.status(201).json({
        postData: result,
        message: "Post created successfully",
      });
    } catch (error) {
      console.error("Error creating post:", error);
      if (
        error.message ===
        "JSON object requested, multiple (or no) rows returned"
      ) {
        res
          .status(404)
          .json({ error: "Post not found or multiple posts found" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
};

const getAllClientPosts = (app) => {
  app.get("/client_posts/", async (req, res) => {
    try {
      // Fetch all posts from the Supabase database
      const { data: posts, error } = await supabase
        .from("post")
        .select()
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      // Send the posts data as JSON response
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });
};

module.exports = {
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
};
