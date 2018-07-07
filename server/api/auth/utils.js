const jwt = require('jsonwebtoken');
const {Drive} = require('../../services/DB/Models')
const {JWTSecret} = process.env

const generateJWT = email => {
  const token = jwt.sign({email}, JWTSecret);
  return token;
}


const extractUserDBInfo = user => {

    const {first_name, last_name, email, social_login} = user;

    const profile_picture = !user.profile_picture ? '' : user.profile_picture;

    // let {drive} = user; // Get the User's drive from DB

    // drive = await Drive.

    return {
      first_name,
      last_name, 
      email, 
      profile_picture, 
      drive,
      social_login
    }
}


module.exports = {
  generateJWT,
  extractUserDBInfo,
}