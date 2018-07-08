const express = require('express');
const authRouter = require('./auth');
const awsRouter = require('./aws');
const userRouter = require('./user');

const Router = express.Router();

Router.use('/auth', authRouter);
Router.use('/aws', awsRouter);
Router.use('/user', userRouter);

module.exports = Router;
