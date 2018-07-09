export const UPDATE_USER_DRIVE = 'UPDATE_USER_DRIVE';
const {prepAuthPayload, reverseSortedDocs} = require('../utils');

const API_URL = 'http://localhost:3000/api'

export const fetchUpdatedDrive = () => {
  const token = localStorage.getItem('token');

  const payload = prepAuthPayload(token);

  return (dispatch) => {
    fetch(`${API_URL}/user/drive`, payload)
      .then(result => result.json())
      .then(updatedDrive => {
        
        console.log('updatedDrive from server ', updatedDrive);


        // Reverse order of Docs so we always see the most recent doc
        // at the top of the screen
        let reversedDocs = reverseSortedDocs(updatedDrive)

        console.log('reversedDocs are ', reversedDocs)

        const drive = {
          drive: reversedDocs,
        }

        // Send updatedDrive to Redux store
        dispatch({type: UPDATE_USER_DRIVE, payload: drive});
      })
      .catch(error => {
        console.log('error getting updatedDrive ', error)
      });
  }

}