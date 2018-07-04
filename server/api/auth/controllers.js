const {User} = require('../../services/DB/Models')

const signup = async (req, res) => {
  let newUser = req.body;
  //Create & save a new User with associated Drive
  newUser = await new User(newUser)

  newUser = await newUser.save()

  res.send(newUser)
}

module.exports = {
  signup
}