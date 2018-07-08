const API_URL = 'http://localhost:3000/api'



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




export const uploadFileToAWS = async (AWS_Paylaod, currentFileObj, fileType) => {

    // Get preSignedUrl from Server
    let serverResponse = await fetch(`${API_URL}/aws/signurl`, AWS_Paylaod).then(response => response.json());
  
        
    const {preSignedUrl} = serverResponse;
    
    // Make second API call to save currentFileObj in S3
  
    let result = await uploadFileWithUrl(preSignedUrl, currentFileObj, fileType)
  
    console.log('result from final file upload ', result)
  
  }