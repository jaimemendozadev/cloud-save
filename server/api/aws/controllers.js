const s3 = require('../../services/aws');
const {AWS_BUCKET_NAME} = process.env;

const getSignedUrl = (req, res) => {
    console.log('req.body inside aws getSignedURL ', req.body)

    // const { name, type, targetLocation } = req.body;


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