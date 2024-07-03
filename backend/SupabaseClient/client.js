const { createClient } = require("@supabase/supabase-js");
require('dotenv').config();


const supabaseUrl = process.env.SUPABASE_KEY_Url;
const supabaseKey = process.env.SUPABASE_KEY;

 const supabase = createClient(supabaseUrl, supabaseKey);

 export default supabase