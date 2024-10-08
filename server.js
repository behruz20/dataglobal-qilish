// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config(); // Ensure this is before any access to process.env

const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// Set mongoose strictQuery option
mongoose.set('strictQuery', true);

// Connect to MongoDB using the URI from the .env file
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sadi:sadi@cluster0.nvmvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

// Call the connectDB function to establish connection
connectDB();

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Your API is running.');
});

// Start the server
app.listen(port, () => {
    console.log(`Your API is running on port ${port}`);
});
