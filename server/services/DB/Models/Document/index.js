const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  owner: {type: Schema.ObjectId, ref: 'User'},
  original_file_name: String,
  aws_key: String,
  aws_url: String,
  file_type: String,
});

const Document = mongoose.model('Document', DocumentSchema);

module.exports = Document;
