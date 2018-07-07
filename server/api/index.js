const express = require('express');
const authRouter = require('./auth');
const awsRouter = require('./aws');

const Router = express.Router();

Router.use('/auth', authRouter);
Router.use('/aws', awsRouter);

module.exports = Router;
