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

const foundUser = (req, res) => {
  console.log('req is ', req)
  console.log('\n');

  const userInDB = req.user;

  console.log('userInDB is ', userInDB)

  res.send(userInDB);
}


const authWithGoogle = (req, res) => {

  const userToken = generateJWT(req.user.email);

  res.redirect(`/signin?token=${userToken}`);

}

module.exports = {
  signup,
  foundUser,
  authWithGoogle,
}