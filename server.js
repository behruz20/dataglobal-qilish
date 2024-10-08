// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// Set mongoose strictQuery option
mongoose.set('strictQuery', true);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Your API is running.');
});

// Start the server
app.listen(port, () => {
    console.log(`Your API is running on port ${port}`);
});
