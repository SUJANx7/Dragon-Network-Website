// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Set the public folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, this is your server!');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
