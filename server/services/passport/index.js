const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const {User} = require('../DB/Models');
const {extractGoogleProfile} = require('./utils');

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback',
  },
  async (_accessToken, _refreshToken, profile, cb) => {

    try {
      let newUser = extractGoogleProfile(profile);
    
      // Create a new User with Drive
      newUser = await new User(newUser);

      newUser = await newUser.save();
      
      // IMPORTANT: Must pass null, as first argument, else you will get an error on FE
      cb(null, newUser)

    } catch(error){
      console.log("There was an error saving/updating the user.", error);

      let errorMessage = "Whoops! There was an error finding you in our system, please try again later.";

      //At this point, User gets redirected to empty page with /auth/google/callback?code url
      callback(errorMessage, null);
    }

    
  }
));


module.exports = passport;