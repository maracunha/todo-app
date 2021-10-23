const express = require('express');

const cors = require('cors');
const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
