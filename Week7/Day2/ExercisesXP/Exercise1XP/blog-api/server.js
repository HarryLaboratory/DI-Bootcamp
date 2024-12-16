const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./server/routes/postRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', postRoutes);

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
