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