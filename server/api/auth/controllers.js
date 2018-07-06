const {User} = require('../../services/DB/Models')
const {generateJWT, extractUserDBInfo} = require('./utils');

const signup = async (req, res) => {
  let savedUser;
  let userToken;
  let FE_Payload;
  
  try {
    // First, try to see if we already have the user
     savedUser = await User.find({email: req.body.email});

    // If we already saved the User, send the payload with token to FE
    if (savedUser.length) {
      FE_Payload = savedUser.pop();
      
      FE_Payload = extractUserDBInfo(FE_Payload);
      
      userToken = generateJWT(savedUser.email);
      
      FE_Payload.token = userToken;
      
      res.send(FE_Payload);


    } else {
      // Create & save a new User with associated Drive, attach token, & send to FE
      let newUser = await new User(req.body);

      newUser = await newUser.save();

      newUser = extractUserDBInfo(newUser);

      userToken = generateJWT(newUser.email);

      newUser.token = userToken;

      console.log('newUser we send to FE ', newUser)

      res.send(newUser);
    }

  } catch(error) {
    console.log('There was an error signing up the user ', error)
  }

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