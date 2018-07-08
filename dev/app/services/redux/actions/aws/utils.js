export const uploadFileWithUrl = async (signedUrl, file, fileType) => {
    const payload = {
        method: 'PUT', // Must be CAPITALIZED e.g. 'POST'
        headers: {
            'Content-Type': fileType, // MUST specify Content-Type
        },
        body: file
      };
      
      let resultFromAWS = await fetch(signedUrl, payload)
      .then(result => {
        console.log('result from S3 file upload ', result);

          return 'Success';
      })
      .catch(error => {
        console.log('error saving file in S3 ', error)
          return 'File upload error';
      })

      console.log('resultFromAWS ', resultFromAWS);

      return resultFromAWS;
}