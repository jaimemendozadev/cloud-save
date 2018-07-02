const express = require('express');
const app = express();
const path = require('path');
const public = path.resolve(__dirname, '../public');

const bodyParser = require('body-parser');

app.use(express.static(public))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(public)
});

module.exports = app;


