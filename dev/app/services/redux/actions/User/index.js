const UPDATE_USER_DRIVE = 'UPDATE_USER_DRIVE';
const {prepAuthPayload} = require('../utils');

const API_URL = 'http://localhost:3000/api'

export const fetchUpdatedDrive = () => {
  const token = localStorage.getItem('token');

  const payload = prepAuthPayload(token);

  return (dispatch) => {
    fetch(`${API_URL}/user/drive`, payload)
      .then(result => result.json())
      .then(updatedDrive => {

        const drive = {
          drive: updatedDrive,
        }

        // Send updatedDrive to Redux store
        dispatch({type: UPDATE_USER_DRIVE, payload: drive});
      })
      .catch(error => {
        console.log('error getting updatedDrive ', error)
      });
  }

}