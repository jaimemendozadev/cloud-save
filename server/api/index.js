const express = require('express');
const authRouter = require('./auth');

const Router = express.Router();

Router.use('/auth', authRouter);

module.exports = Router;
