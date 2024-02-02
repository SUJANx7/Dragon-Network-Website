const express = require('express');
const path = require('path');
require('dotenv').config();

// Create an Express application
const app = express();

// Set the public folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, this is your server!');
});

// Use the PORT from .env or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
