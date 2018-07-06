const jwt = require('jsonwebtoken');
const {JWTSecret} = process.env

const generateJWT = email => {
  const token = jwt.sign({email}, JWTSecret);
  return token;
}


const extractUserDBInfo = user => {

    const {first_name, last_name, email, drive} = user;

    const profile_picture = !user.profile_picture ? '' : user.profile_picture;

    return {
      first_name,
      last_name, 
      email, 
      profile_picture, 
      drive
    }
}


module.exports = {
  generateJWT,
  extractUserDBInfo,
}