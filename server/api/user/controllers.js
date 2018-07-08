const {User} = require('../../services/DB/Models')

const getUserDrive = async(req, res) => {
  const email = req.user.email;

  // Find the User
  let foundUser = await User.find({email});

  foundUser = foundUser.pop();

  // Populate the User Drive
  foundUser = await foundUser.populate('Drive').exec();

  const userDrive = foundUser.drive;
  
  // Send Drive to FE
  res.send(userDrive);
  
}


module.exports = {
  getUserDrive,
}