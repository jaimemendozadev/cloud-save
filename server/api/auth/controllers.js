const {User, Drive} = require('../../services/DB/Models')
const {generateJWT, extractUserDBInfo} = require('./utils');

const signup = async (req, res) => {
  let savedUser;
  let userToken;
  
  try {
    // First, try to see if we already have the user
     savedUser = await User.find({email: req.body.email});


    // If we already saved the User, send the payload with token to FE
    if (savedUser.length) {
      savedUser = savedUser.pop();


      const userID = savedUser._id;

      console.log('userID is ', userID)

      savedUser = extractUserDBInfo(savedUser);

      // Get the User's Drive with Documents
      let userDrive = await Drive.find({owner: userID}).populate('root').exec();

      userDrive = userDrive.pop();

      console.log('found userDrive is ', userDrive)

      savedUser.drive = userDrive.root;

      console.log('savedUser with drive in signup ', savedUser)

      userToken = generateJWT(savedUser.email);
      
      savedUser.token = userToken;
      
      res.send(savedUser);


    } else {
      // Create & save a new User with associated Drive, attach token, & send to FE
      let newUser = await new User(req.body);

      newUser = await newUser.save();

      newUser = extractUserDBInfo(newUser);

      userToken = generateJWT(newUser.email);

      newUser.token = userToken;

      res.send(newUser);
    }

  } catch(error) {
    console.log('There was an error signing up the user ', error)
  }

}

const foundUser = async (req, res) => {
  // Get authenticated User
  let userInDB = req.user;

  userInDB = extractUserDBInfo(userInDB);

  // Get the User's Drive with Documents
  let userDrive = await Drive.find({owner: req.user._id}).populate('root').exec();

  userDrive = userDrive.pop();

  userInDB.drive = userDrive.root;

  console.log('extracted userInDB is ', userInDB)

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