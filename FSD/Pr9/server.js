// Import express
const express = require("express");
const path = require("path");

// Initialize express app
const app = express();

// Define port
const PORT = 3000;

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running successfully on http://localhost:${PORT}`);
});
