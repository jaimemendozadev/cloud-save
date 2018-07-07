const express = require('express');
const passport = require('../../services/passport');
const Router = express.Router();
const {signup, authWithGoogle, foundUser} = require('./controllers');

Router.post('/signup', signup);
Router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// Failure Redirect doesn't seem to go where you specify
Router.get('/google/callback', passport.authenticate('google', {session: false, failureRedirect: '/signup' }), authWithGoogle);


Router.get('/user',  passport.authenticate('jwt', { session: false }), foundUser)


Router.post('/login', (req, res) => console.log('Login a User'))


module.exports = Router;