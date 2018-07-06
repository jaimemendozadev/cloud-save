const jwt = require('jsonwebtoken');
const {JWTSecret} = process.env

const generateJWT = email => {
  const token = jwt.sign({email}, JWTSecret);
  return token;
}


const extractUserDBInfo = user => {

    const {first_name, last_name, email, drive, social_login} = user;

    const profile_picture = !user.profile_picture ? '' : user.profile_picture;

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