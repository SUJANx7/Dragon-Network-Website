const fs = require('fs');
const path = require('path');
const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.Console({
            format: combine(
                colorize(),
                logFormat
            ),
        }),
        new transports.File({
            filename: path.join('logs', `${new Date().toLocaleDateString('en-GB').replace(/\//g, '')}.log`),
            maxsize: 5242880, // 5MB
            maxFiles: 5,
        }),
    ],
});

// Adding custom log levels
logger.level = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
};

// Adding custom log functions for each level
logger.error = (message) => logger.log({ level: 'error', message });
logger.warn = (message) => logger.log({ level: 'warn', message });
logger.info = (message) => logger.log({ level: 'info', message });
logger.debug = (message) => logger.log({ level: 'debug', message });

module.exports = logger;
