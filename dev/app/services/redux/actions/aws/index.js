export const FILE_UPLOAD = 'FILE_UPLOAD';
const API_URL = 'http://localhost:3000/api'

export const uploadFile = (AWS_Paylaod, currentFileOb) => {
  return (dispatch) => {
    fetch(`${API_URL}/aws/signurl`, AWS_Paylaod)
      .then(response => {
        let serverResponse = response.json();

        const awsStatusUpdate = {
          gettingSignedUrl: true,
        }

        dispatch({type: FILE_UPLOAD, payload: awsStatusUpdate });

        console.log('serverResponse for /aws/signurl ', serverResponse);

        // Make second API call to save currentFileOb in S3

      });
  }
}


