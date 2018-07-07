// If no httpMethod arg is given, file upload will be new doc stored in bucket
export const prepAWSPayload = (httpMethod = 'POST', token, objectName) => {
    const payload = {
        method: httpMethod, //Must be CAPITALIZED e.g. 'POST'
        headers: {
            'Authorization': `bearer ${token}`
        },
        body: `${objectName}`
      };
    
      return payload;
}