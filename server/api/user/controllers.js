const {Drive} = require('../../services/DB/Models')

const getUserDrive = async(req, res) => {
  
  const authedUserID = req.user._id;

  let userDrive = await Drive.find({owner: authedUserID}).populate('root').exec();

  userDrive = userDrive.pop();
  
  // Send Drive to FE
  res.send(userDrive.root);
  
}


module.exports = {
  getUserDrive,
}