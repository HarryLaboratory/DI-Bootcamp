// app.js
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());  // Middleware 

// Import routes
const bookRoutes = require('./server/routes/bookRoutes');
app.use('/api/books', bookRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
