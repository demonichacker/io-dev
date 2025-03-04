import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Create express server
const app = express();

// Get the directory name of the current file
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, "dist")));

// All other requests should be served the index.html file for React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Set the port for the server to listen on
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
