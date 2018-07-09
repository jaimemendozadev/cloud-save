import {prepAuthPayload} from '../utils';
export const INIT_SOCIAL_AUTH = 'INIT_SOCIAL_AUTH';
export const INIT_REGULAR_AUTH = 'INIT_REGULAR_AUTH';
export const APP_INIT = 'APP_INIT';
export const TOKEN_SET = 'TOKEN_SET';
export const RESET_SOCIAL_AUTH = 'RESET_SOCIAL_AUTH';
export const START_LOG_OUT = 'START_LOG_OUT';



const API_URL = 'http://localhost:3000/api'

export const initSocialAuth = () => {
  return {
    type: INIT_SOCIAL_AUTH,
    payload: { SocialAuthInProgress: true },
  }
}

export const initRegularAuth = () => {
  return {
    type: INIT_REGULAR_AUTH,
    payload: { RegularAuthInProgress: true },
  }
}

export const tokenSet = () => {
  return {
    type: TOKEN_SET,
    payload: {tokenSet: true},
  }
}


export const getSocialAuthUser = (token, context) => {
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

export const getRegularAuthUser = (payload, context) => {
  
  return (dispatch) => {
    fetch(`${API_URL}/auth/signup`, payload)
      .then(response => response.json())
      .then(results => {
        const {token, ...rest} = results;

        // Set token in localStorage & notify Redux
        localStorage.setItem('token', token);

        dispatch({
          type: TOKEN_SET,
          payload: {tokenSet: true},
        })
        
        // Save User in Redux
        dispatch({type: APP_INIT, payload: rest});

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

export const startUserLogOut = () => {

  return {
    type: START_LOG_OUT,
    payload: {logOutUser: true}
  }
}
   