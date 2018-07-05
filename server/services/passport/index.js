const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL} = process.env;
const {User} = require('../DB/Models');
const {extractGoogleProfile} = require('./utils');

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,
  },
  async (_accessToken, _refreshToken, profile, cb) => {

    let newUser = extractGoogleProfile(profile);
    
    // Create a new User with Drive
    newUser = await new User(newUser);

    newUser = await newUser.save();

    // Pass new Usser to cb
    cb(newUser)
  }
));


module.exports = passport;