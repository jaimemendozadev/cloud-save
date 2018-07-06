import {prepAuthPayload, prepReduxActionPayload} from './utils';
export const INIT_SOCIAL_AUTH = 'INIT_SOCIAL_AUTH';
export const APP_INIT = 'APP_INIT';
export const TOKEN_SET = 'TOKEN_SET';
export const RESET_SOCIAL_AUTH = 'RESET_SOCIAL_AUTH';

const API_URL = 'http://localhost:3000/api'

export const initSocialAuth = () => {
  return {
    type: INIT_SOCIAL_AUTH,
    payload: { authInProgress: true },
  }
}

export const tokenSet = () => {
  return {
    type: TOKEN_SET,
    payload: {tokenSet: true},
  }
}


export const getSocialAuthUser = (token, context, callback) => {
  const payload = prepAuthPayload(token);

  return (dispatch) => {
    fetch(`${API_URL}/auth/user`, payload)
      .then(response => response.json())
      .then(results => {

        // Save User in Redux
        dispatch({type: APP_INIT, payload: results});

        // Redirect to Homepage
        context.setState({
          redirect: true,
          redirectTarget: 'homepage'
        })
      })
      
  }
  
}


export const resetSocialAuth = () => {
  return {
    type: RESET_SOCIAL_AUTH,
  }
}

   