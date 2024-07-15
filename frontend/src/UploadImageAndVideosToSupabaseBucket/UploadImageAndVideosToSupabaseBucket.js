const { createClient } = require("@supabase/supabase-js");
const { v4 } = require("uuid");


const supabaseUrl = "https://rqufzhhcewwjafsuxipv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdWZ6aGhjZXd3amFmc3V4aXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MjEyODUsImV4cCI6MjAyNjQ5NzI4NX0.zh8JWJmTq9kQxbsBTakBcS2shXgVvOTq6lZV_pUGxu0";

const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadData = async (selectedFiles, bucketName, path) => {
  const uploadPromises = selectedFiles.map(async (file) => {
    if (file) {
      const code = v4(); // Generate a unique code (UUID) for each file
console.log({code: code})
      // Construct full path for each file
      const fileExtensionStartIndex = file.name.lastIndexOf(".") + 1;
      const fullPath = `${path}/${code}.${file.name.substring(
        fileExtensionStartIndex
      )}`;

      try {
        const { data, error } = await supabase.storage
          .from(bucketName)
          .upload(fullPath, file);

        if (error) {
          console.error("Error uploading file:", error.message);
          console.error("Error details:", error.details);
          console.error("Error hint:", error.hint);
          return { success: false, message: `Error uploading file: ${error.message}` };
        } else if (data) {
          return { success: true, message: "File uploaded successfully", data, code:code };
        }
      } catch (error) {
        console.error("Error uploading file:", error.message);
        return { success: false, message: `Error uploading file: ${error.message}` };
      }
    }
  });

  try {
    const results = await Promise.all(uploadPromises);
    return results; // Return array of results for all uploaded files
  } catch (error) {
    console.error("Error uploading files:", error.message);
    return [{ success: false, message: `Error uploading files: ${error.message}` }];
  }
};


