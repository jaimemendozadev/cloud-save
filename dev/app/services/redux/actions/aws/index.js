const FILE_UPLOAD = 'FILE_UPLOAD';
const API_URL = 'http://localhost:3000/api'

const uploadFile = async (AWS_Paylaod, currentFileOb) => {
  return (dispatch) => {
    fetch(`${API_URL}/aws/signurl`, AWS_Paylaod)
      .then(response => {
        let serverResponse = response.json();

        console.log('serverResponse for /aws/signurl ', serverResponse);

        // Make second API call to save currentFileOb in S3


      })
  }
}