import {prepAuthPayload, prepReduxActionPayload} from './utils';
export const INIT_SOCIAL_AUTH = 'INIT_SOCIAL_AUTH';
export const APP_INIT = 'APP_INIT';
export const RESET_SOCIAL_AUTH = 'RESET_SOCIAL_AUTH';

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


export const getSocialAuthUser = (token, context, callback) => {
  const payload = prepAuthPayload(token);

  return (dispatch) => {
    fetch(`${API_URL}/auth/user`, payload)
      .then(response => response.json())
      .then(results => {

        console.log('results in getSocialAuthUser ', results);
        console.log('context inside getSocialAuthUser ', context)

        
        // Save token in localStorage
        localStorage.setItem('token', token);

        // Save User in Redux
        dispatch({type: APP_INIT, payload: results});

        // Redirect to Homepage

      
      })
      
  }
  
}


export const resetSocialAuth = () => {
  return {
    type: RESET_SOCIAL_AUTH,
  }
}

   