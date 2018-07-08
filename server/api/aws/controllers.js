const s3 = require('../../services/aws');
const uuidv1 = require('uuid/v1');
const {AWS_BUCKET_NAME, AWS_BUCKET_BASE_URL} = process.env;
const {Document, Drive} = require('../../services/DB/Models');
const {generateAWSKeyUrl} = require('./utils');


const getSignedUrl = async(req, res) => {
    const { name, type, extension, targetLocation } = req.body;
    const userID = req.user._id;

    const {aws_key, aws_url} = generateAWSKeyUrl(userID, extension, targetLocation);


    const payload = {
      Bucket: AWS_BUCKET_NAME,
      ContentType: type,
      Key: aws_key,
    }

    // Get preSignedUrl from S3
    s3.getSignedUrl('putObject', payload, (err, url) => {

      if(err) {
        res.send({errorMessage: 'There was a problem uploading the file. Try again later.'});
      }

      // Create & save new Document in DB
      let newDocument = {owner: req.user._id, original_file_name: name, aws_key, aws_url, file_type: type }
      newDocument = await new Document(newDocument).save();

      console.log('newDocument after s3 request ', newDocument)


      // Get and update User's Drive with new Document
      let userDrive = await Drive.find({owner: userID});

      console.log('found userDrive ', userDrive);

      userDrive.root.push(newDocument._id);

      userDrive = await userDrive.save();

      console.log('userDrive after save ', userDrive);

      res.send({preSignedUrl: url});

    });
}


const uploadFile = (req, res) => {

}



module.exports = {
  getSignedUrl,
  uploadFile
}