export const uploadFileWithUrl = async (signedUrl, file, fileType) => {
    const payload = {
        method: 'PUT', // Must be CAPITALIZED e.g. 'POST'
        headers: {
            'Content-Type': fileType, // MUST specify Content-Type
        },
        body: file
      };
      
      let resultFromAWS = await fetch(signedUrl, payload);

      console.log('resultFromAWS ', resultFromAWS);
}