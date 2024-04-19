docker exec - it media - production psql - U postgres CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE folders (
  id SERIAL PRIMARY KEY,
  folder_name VARCHAR(100) NOT NULL,
  subfolders ARRAY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE source (
  id SERIAL PRIMARY KEY,
  source_name Text NOT NULL,
  src TEXT NOT NULL,
  category TEXT NOT NULL,
  folder TEXT NOT NULL,
  sub_folder TEXT NOT NULL,
  source_description TEXT NOT NULL,
  photographer TEXT NOT NULL,
  home_page_flag BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE stills (
  id SERIAL PRIMARY KEY,
  photo_name Text NOT NULL,
  src TEXT NOT NULL,
  category TEXT NOT NULL,
  folder TEXT NOT NULL,
  sub_folder TEXT NOT NULL,
  event_type TEXT NOT NULL,
  source_description TEXT NOT NULL,
  photographer TEXT NOT NULL,
  client_promo_code TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motion_pictures (
  id SERIAL PRIMARY KEY,
  video_name Text NOT NULL,
  src TEXT NOT NULL,
  category TEXT NOT NULL,
  folder TEXT NOT NULL,
  sub_folder TEXT NOT NULL,
  event_type TEXT NOT NULL,
  source_description TEXT NOT NULL,
  photographer TEXT NOT NULL,
  client_promo_code TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  project_name Text NOT NULL,
  src TEXT NOT NULL,
  category TEXT NOT NULL,
  folder TEXT NOT NULL,
  sub_folder TEXT NOT NULL,
  event_type TEXT NOT NULL,
  source_description TEXT NOT NULL,
  photographer TEXT NOT NULL,
  client_promo_code TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin_user (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT,
  avatar TEXT NOT NULL,
  role TEXT,
  permissions TEXT [],
  status BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_user (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT,
  avatar TEXT NOT NULL,
  role TEXT,
  client_code TEXT,
  permissions TEXT [],
  status BOOLEAN NOT NULL,
  client_code_verified BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin_price_and_services (
  id SERIAL PRIMARY KEY,
  service_image Text,
  title TEXT NOT NULL,
  service_list TEXT[] NOT NULL,
  price TEXT NOT NULL,
  creator TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
  post_image Text NOT NULL,
  username TEXT NOT NULL,
  post TEXT[] NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)



CREATE TABLE user_permissions (
  id SERIAL PRIMARY KEY,
  role TEXT NOT NULL,
  permissions TEXT [] NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Example
INSERT INTO
  user_permissions (role, permissions)
VALUES
  (
    'Super Admin',
    ARRAY ['Manage all user accounts', 'Access and modify all system settings', 'Create and assign roles and permissions', 'View and manage all system logs', 'Access to all features and functionalities', 'Perform system-wide backups and restores']
  ),
  (
    'Basic Admin',
    ARRAY ['Manage user accounts within assigned departments', 'Access and modify department-specific settings', 'Create and assign roles within assigned departments', 'View and manage department-specific logs', 'Access to department-specific features and functionalities', 'Perform department-level backups and restores']
  ),
  (
    'Admin',
    ARRAY ['Manage user accounts within assigned teams', 'Access and modify team-specific settings', 'Create and assign roles within assigned teams', 'View and manage team-specific logs', 'Access to team-specific features and functionalities', 'Perform team-level backups and restores']
  );

-- createchats users
CREATE TABLE register_chat_user (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_password TEXT NOT NULL,
  user_file TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_sources (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  client_code TEXT NOT NULL,
  file_type TEXT NOT NULL,
  files TEXT [] NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 -- Chats
CREATE TABLE chat (
  id SERIAL PRIMARY KEY,
  sender_id text NOT NULL,
  receiver_id text NOT NULL,
  message TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE blog (
  blog_id SERIAL PRIMARY KEY,
  blog_admin_avatar TEXT,
   blog_image TEXT,
   blog_title TEXT NOT NULL,
   blog_description TEXT NOT NULL,
   blog_author TEXT NOT NULL,
   blog_like integer,
   blog_dislike integer,
   blog_comment TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);