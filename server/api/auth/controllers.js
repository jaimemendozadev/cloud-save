const {User} = require('../../services/DB/Models')
const {generateJWT, extractUserDBInfo} = require('./utils');

const signup = async (req, res) => {
  let newUser = req.body;
  //Create & save a new User with associated Drive
  newUser = await new User(newUser)

  newUser = await newUser.save()

  const userToken = generateJWT(newUser.email);

  res.send({token: userToken});
}




const authWithGoogle = (req, res) => {

  const userToken = generateJWT(req.user.email);

  res.redirect(`/signup?token=${userToken}`);

}

module.exports = {
  signup,
  authWithGoogle
}