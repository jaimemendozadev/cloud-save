// If no httpMethod arg is given, file upload will be new doc stored in bucket
export const prepAWSPayload = (httpMethod = 'POST', token, fileInfo) => {
    const payload = {
        method: httpMethod, // Must be CAPITALIZED e.g. 'POST'
        headers: {
            'Authorization': `bearer ${token}`, 
            'Content-Type': 'application/json', // MUST specify Content-Type
        },
        body: JSON.stringify(fileInfo)
      };
    
      return payload;
}


export const getFileType = type => {
    const fileTypes = {
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : '.docx',
        'application/msword': '.doc',
        'application/pdf': '.pdf',
        'image/gif': '.gif',
        'image/jpeg': '.jpeg',
        'image/png': '.png',
        'image/svg+xml': '.svg'
    }

    return fileTypes[type];
}

const API_URL = 'http://localhost:3000/api'


const uploadFileWithUrl = async (signedUrl, file, fileType) => {
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

      return resultFromAWS;
}




export const uploadFileToAWS = async (AWS_Payload, currentFileObj, fileType) => {

    // Get preSignedUrl from Server
    let serverResponse = await fetch(`${API_URL}/aws/signurl`, AWS_Payload).then(response => response.json())
      .catch(error => console.log('error getting preSignedUrl ', error));
  
    const {preSignedUrl} = serverResponse;
    
    // Make second API call to save currentFileObj in S3
    let result = await uploadFileWithUrl(preSignedUrl, currentFileObj, fileType)
  
    return result;
  
  }