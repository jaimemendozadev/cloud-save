const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Drive = require('../Drive');
const saltRounds = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: String,
  social_login: {type: Boolean, default: false},
  profile_picture: String,
  drive: {type: Schema.ObjectId, ref: 'Drive'}
});

UserSchema.pre('save', async function(){
  
  //If User created from Sign Up, hash PW
  if (this.social_login === false) {
     let hashPW = await bcrypt.hash(this.password, saltRounds);
     this.password = hashPW;
  }

  //Create a new Drive for User
  let newDrive = await new Drive();

  //Reference Drive and User to each other
  newDrive.owner = this._id;
  this.drive = newDrive._id;

  //Save new User's Drive
  newDrive = await newDrive.save();
  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;