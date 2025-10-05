// Import required modules
const express = require("express");
const fs = require("fs");
const path = require("path");

// Create express app
const app = express();

// Define the port
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route to display log file contents
app.get("/view-logs", (req, res) => {
  const logFilePath = path.join(__dirname, "logs", "error_logs.txt");

  // Read the log file
  fs.readFile(logFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Error reading log file:", err.message);
      return res.status(500).send(`
        <h1 style="color:red; text-align:center;">⚠️ Error reading log file!</h1>
        <p style="text-align:center;">${err.message}</p>
      `);
    }

    // Display the log file content
    res.send(`
      <html>
      <head>
        <title>Server Logs</title>
        <style>
          body {
            background: #121212;
            color: #e0e0e0;
            font-family: 'Poppins', sans-serif;
            padding: 30px;
          }
          h1 {
            color: #00e6e6;
            text-align: center;
          }
          pre {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 10px;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          a {
            display: block;
            margin-top: 20px;
            text-align: center;
            color: #00e6e6;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <h1>📜 Server Log Viewer</h1>
        <pre>${data}</pre>
        <a href="/">⬅ Back to Home</a>
      </body>
      </html>
    `);
  });
});

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
