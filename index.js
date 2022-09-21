'use strict';

const { start } = require('./src/server');
require('dotenv').config();

const PORT = process.env.PORT || 3002;

start(PORT);
