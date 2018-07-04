const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  owner: {type: Schema.ObjectId, ref: 'User'},
  file_name: String,
  file_type: String,
  aws_key: String,
});

const Document = mongoose.model('Document', DocumentSchema);

module.exports = Document;
