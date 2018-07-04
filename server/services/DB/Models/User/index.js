const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  profile_picture: String,
  drive: {type: Schema.ObjectId, ref: 'Drive'}
})

const User = mongoose.model('User', UserSchema);

module.exports = User;