const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Enable CORS 
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// To define a simple GET route
app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});

// To define a POST route to receive data from the React client
app.post("/api/world", (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);  // To log the received message
  res.json({ response: `I received your POST request. This is what you sent me: "${message}"` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
