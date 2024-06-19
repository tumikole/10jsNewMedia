const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://rqufzhhcewwjafsuxipv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdWZ6aGhjZXd3amFmc3V4aXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MjEyODUsImV4cCI6MjAyNjQ5NzI4NX0.zh8JWJmTq9kQxbsBTakBcS2shXgVvOTq6lZV_pUGxu0";

const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadData = async (selectedFile, bucketName, path, code) => {
  if (selectedFile) {
    const fileExtensionStartIndex = selectedFile.name.lastIndexOf(".") + 1;
    const fullPath = `${path}/${code}.${selectedFile.name.substring(
      fileExtensionStartIndex
    )}`;
    try {
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(fullPath, selectedFile);

      if (error) {
        console.error("Error uploading file:", error.message);
        console.error("Error details:", error.details);
        console.error("Error hint:", error.hint);
      } else if (data) {
        console.error("File uploaded successfully:", data);
      }
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
  }
};

export const getUploadedData = async (bucketName, pathName) => {
  const fullPath = `${pathName}/`;

  try {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .list(fullPath);

    if (error) {
      console.error("Error fetching uploaded data:", error.message);
      return { data: null, error };
    }
    if (data) {
      return { data, error: null };
    }
  } catch (error) {
    console.error("Error fetching uploaded data:", error.message);
    return { data: null, error: { message: "Error fetching uploaded data" } };
  }
};
