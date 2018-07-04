const express = require('express');
const Router = express.Router();

Router.post('/signup', (req, res) => console.log('Signup a User'))

Router.post('/login', (req, res) => console.log('Login a User'))


module.exports = Router;






