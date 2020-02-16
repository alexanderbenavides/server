const express = require('express');

const app = express();
app.use(require('./contact'));

module.exports = app;