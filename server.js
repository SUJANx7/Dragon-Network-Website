const express = require('express');
const dotenv = require('dotenv');
const logger = require('./logger');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    logger.info('Request to / endpoint');
    res.send('Hello, World!');
});

app.get('/error', (req, res) => {
    logger.error('This is an error message');
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});
