const s3 = require('../../services/aws');
const uuidv1 = require('uuid/v1');
const {AWS_BUCKET_NAME} = process.env;

const getSignedUrl = (req, res) => {
    console.log('req.body inside aws getSignedURL ', req.body)
    const currentUser = req.user;

    const { name, type, extension, targetLocation } = req.body;
    const baseFolder = req.user._id;

    const originalFileName = name;
    const awsFileName = `${uuidv1()}${extension}`; 

    // For MVP, only save files in Root folder/drive
    const Key = `${baseFolder}${targetLocation}${awsFileName}`;
    
 
    // Get file/Key name
    // Create unique name for file/Key name with uuid
    // Save uuid-Key with regular key name in DB
    // Make request for presigned URL
    

    /*
    const Key: 

    const payload = {
      Bucket: AWS_BUCKET_NAME,
      Key, 
    }
    */
  
    res.send({message: 'Hit getSignedUrl for aws'});

  // s3.getSignedUrl('getObject')
}


const uploadFile = (req, res) => {

}



module.exports = {
  getSignedUrl,
  uploadFile
}