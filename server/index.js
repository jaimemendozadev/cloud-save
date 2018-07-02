const express = require('express');

const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, '../public');

const bodyParser = require('body-parser');

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(publicPath);
});

module.exports = app;
