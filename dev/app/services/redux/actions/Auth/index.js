import {prepAuthPayload, prepReduxActionPayload} from './utils';
export const INIT_SOCIAL_AUTH = 'INIT_SOCIAL_AUTH';
export const APP_INIT = 'APP_INIT';

const API_URL = 'http://localhost:3000/api'

export const initSocialAuth = () => {
  const payload = {
    authInProgress: true
  }
  return {
    type: INIT_SOCIAL_AUTH,
    payload,
  }
}


export const getSocialAuthUser = token => {
  const payload = prepAuthPayload(token);

  return (dispatch) => {
    fetch(`${API_URL}/auth/user`, payload)
      .then(response => response.json())
      .then(results => {

        console.log('results in getSocialAuthUser ', results);
        // Save User in Redux
        // Save token in localStorage
        // Redirect to Homepage
      })
      
  }
  
}

   