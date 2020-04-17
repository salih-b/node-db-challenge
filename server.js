const express = require('express');
const helmet = require('helmet');

const BusinessRouter = require('./businesses/businesses-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', BusinessRouter);

module.exports = server;