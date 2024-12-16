const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

// Middleware 
app.use(express.json());

// Routes API
app.use('/api', userRoutes);

// log server
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
