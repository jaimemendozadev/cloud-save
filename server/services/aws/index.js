const AWS = require('aws-sdk');
const {AWS_KEY_ID, AWS_SECRET_KEY } = process.env;

const s3 = new AWS.S3({
    accessKeyId: AWS_KEY_ID,
    secretAccessKey: AWS_SECRET_KEY
});

module.exports = s3;