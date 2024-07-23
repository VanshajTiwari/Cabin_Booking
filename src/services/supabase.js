import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://etlnpanryozuiafvsdiu.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bG5wYW5yeW96dWlhZnZzZGl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NTM2MTcsImV4cCI6MjAxOTQyOTYxN30.j__DsWKDWAmSkFsv0GdreUwqkq8Pu6mPWe3MIIJ-dyk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
