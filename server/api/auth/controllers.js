const jwt = require('jsonwebtoken');
const {User} = require('../../services/DB/Models')
const {JWTSecret} = process.env

const generateJWT = email => {
  const token = jwt.sign({email}, JWTSecret);
  return token;
}

const signup = async (req, res) => {
  let newUser = req.body;
  //Create & save a new User with associated Drive
  newUser = await new User(newUser)

  newUser = await newUser.save()

  const userToken = generateJWT(newUser.email);

  res.send({token: userToken});
}

const authWithGoogle = (req, res) => {
  let newUser = req.user;

  const userToken = generateJWT(newUser.email);
  
  res.redirect(`/?token=${userToken}`);
}

module.exports = {
  signup,
  authWithGoogle
}