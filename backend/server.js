const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const authRoute = require('./routes/authRoutes');
const cors = require('cors');

// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoute);

// Error handling midderware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB(); // Connect to the database
});

