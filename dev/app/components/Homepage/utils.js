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