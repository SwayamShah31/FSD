// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Initialize app
const app = express();

// Define port
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/calculate", (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const operation = req.body.operation;
  let result;

  // Input validation
  if (isNaN(num1) || isNaN(num2)) {
    return res.send(`
      <h1 style="color:red; text-align:center;">❌ Invalid input!</h1>
      <p style="text-align:center;">Please enter valid numbers.</p>
      <a href="/" style="display:block; text-align:center;">⬅ Back to Calculator</a>
    `);
  }

  // Perform calculation
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        return res.send(`
          <h1 style="color:red; text-align:center;">⚠️ Division by Zero!</h1>
          <p style="text-align:center;">Cannot divide by zero.</p>
          <a href="/" style="display:block; text-align:center;">⬅ Back to Calculator</a>
        `);
      }
      result = num1 / num2;
      break;
    default:
      return res.send(`
        <h1 style="color:red; text-align:center;">❌ Invalid Operation!</h1>
        <a href="/" style="display:block; text-align:center;">⬅ Back to Calculator</a>
      `);
  }

  // Send result page
  res.send(`
    <html>
      <head>
        <title>Calculation Result</title>
        <style>
          body {
            background: #141e30;
            color: white;
            font-family: 'Poppins', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .result-box {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px 50px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 0 20px rgba(0,0,0,0.4);
          }
          h1 { color: #00e6e6; }
          a {
            text-decoration: none;
            background: #00e6e6;
            color: #1a1a1a;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 600;
            display: inline-block;
            margin-top: 15px;
          }
          a:hover {
            background: #00b3b3;
          }
        </style>
      </head>
      <body>
        <div class="result-box">
          <h1>✅ Result: ${result}</h1>
          <a href="/">🔁 Back to Calculator</a>
        </div>
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running successfully on http://localhost:${PORT}`);
});
