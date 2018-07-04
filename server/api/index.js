const authRouter = require('./auth')

const express = require('express');
const Router = express.Router();


Router.use('/auth', authRouter)


module.exports = Router;






