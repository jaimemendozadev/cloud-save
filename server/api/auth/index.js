const express = require('express');
const passport = require('../../services/passport');
const Router = express.Router();

Router.post('/signup', (req, res) => {
    console.log('Signup a User', req.body)
    res.send({status: 'Ok', message: 'made it to signup router'})
})

Router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

Router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => console.log('successful google auth'))


Router.post('/login', (req, res) => console.log('Login a User'))


module.exports = Router;






