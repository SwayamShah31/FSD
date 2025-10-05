// Importing express
const express = require("express");
const path = require("path");

// Initialize the app
const app = express();

// Define port
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
  res.send(`
    <h1 style="text-align:center; color:#00bcd4;">Welcome to Express Project Template 🚀</h1>
    <p style="text-align:center;">Go to <a href="/home">/home</a> to view the homepage.</p>
  `);
});

// Home route
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running successfully at http://localhost:${PORT}`);
});
