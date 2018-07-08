const uuidv1 = require('uuid/v1');
const {AWS_BUCKET_BASE_URL} = process.env;

const generateAWSKeyUrl = (userID, extension, targetLocation) => {
  const baseFolder = userID;
  const awsFileName = `${uuidv1()}${extension}`;   
  const aws_key = `${baseFolder}${targetLocation}${awsFileName}`;
  const aws_url = `${AWS_BUCKET_BASE_URL}${aws_key}`;  
  return {aws_key, aws_url}
}

module.exports = {
  generateAWSKeyUrl,
}