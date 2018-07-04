const mongoose = require('mongoose');

const { DB_URL} = process.env;

mongoose.connect(DB_URL, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

const DB = mongoose.connection;

DB.on('connected', () => {  
  console.log('Mongoose DB connected!');
}); 
  
// If the connection throws an error
DB.on('error', err => {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
DB.on('disconnected', () => {  
  console.log('Mongoose default connection disconnected'); 
});

module.exports = DB;
