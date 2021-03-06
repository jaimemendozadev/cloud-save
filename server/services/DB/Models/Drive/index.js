const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriveSchema = new Schema({
  root: [{type: Schema.ObjectId, ref:'Document'}],
  owner: {type: Schema.ObjectId, ref: 'User'},
  folders: [{type: Schema.ObjectId, ref: 'Folder'}],
})

const Drive = mongoose.model('Drive', DriveSchema)

module.exports = Drive;