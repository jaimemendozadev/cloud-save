const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback'
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log('Do something with Google user profile')
    console.log('accessToken ', accessToken)
    console.log('refreshToken ', refreshToken)
    console.log('profile ', profile)
  }
));


module.exports = passport;