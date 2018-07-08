const s3 = require('../../services/aws');
const uuidv1 = require('uuid/v1');
const {AWS_BUCKET_NAME} = process.env;

const getSignedUrl = (req, res) => {
    const currentUser = req.user;

    const { name, type, extension, targetLocation } = req.body;
    const baseFolder = req.user._id;

    const originalFileName = name;
    const awsFileName = `${uuidv1()}${extension}`; 

    // For MVP, only save files in Root folder/drive
    const Key = `${baseFolder}${targetLocation}${awsFileName}`;

    const payload = {
      Bucket: AWS_BUCKET_NAME,
      ContentType: type,
      Key, 
    }

    s3.getSignedUrl('putObject', payload, (err, url) => {
      res.send({preSignedUrl: url});
    });
}


const uploadFile = (req, res) => {

}



module.exports = {
  getSignedUrl,
  uploadFile
}