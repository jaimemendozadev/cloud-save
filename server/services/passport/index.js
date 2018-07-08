const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {User} = require('../DB/Models');
const {extractGoogleProfile} = require('./utils');


/***************************
 * Google Passport Strategy
****************************/


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback',
  },
  async (_accessToken, _refreshToken, profile, callback) => {
    let savedUser;

    try {
      // First, try to see if we already have the user
      savedUser = await User.find({ email: profile.emails[0].value });

      // If we already saved the User, send the savedUser to Google callback
      if (savedUser.length) {
        savedUser = savedUser.pop();
        
        callback(null, newUser)

      } else {
        // Get extract the User's Google profile, save to DB, and send to Callback
        let newUser = extractGoogleProfile(profile);
    
        // Create a new User with Drive
        newUser = await new User(newUser);

        newUser = await newUser.save();
      
        // IMPORTANT: Must pass null, as first argument, else you will get an error on FE
        callback(null, newUser)

      }

    } catch(error){
      console.log("There was an error saving/updating the user.", error);

      let errorMessage = "Whoops! There was an error finding you in our system, please try again later.";

      //At this point, User gets redirected to empty page with /auth/google/callback?code url
      callback(errorMessage, null);
    }
    
  }
));



/***************************
 * JWT Passport Strategy
****************************/


const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWTSecret;

passport.use(new JwtStrategy(opts, async (jwt_payload, callback) => {

  const userEmail = jwt_payload.email;

  try {
  
    // Find User in DB
    let savedUser = await User.find({email: userEmail});

    savedUser = savedUser.pop();

    // IMPORTANT: Must pass null, as first argument, else you will get an error on FE
    callback(null, savedUser)

  } catch(error){
    console.log("There was an error getting the user from the DB.", error);

    const errorMessage = "Whoops! There was an error finding you in our system, please try again later.";

    callback(errorMessage, false);
  }


}));


module.exports = passport;