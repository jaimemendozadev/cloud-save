import {INIT_SOCIAL_AUTH, INIT_REGULAR_AUTH, TOKEN_SET, RESET_SOCIAL_AUTH, START_LOG_OUT} from '../../actions/Auth';


const initialState = {
  SocialAuthInProgress: false,
  RegularAuthInProgress: false,
  tokenSet: false,
  logOutUser: false,

}

const authStatusReducer = (state = initialState, action) => {
  switch(action.type){
    case INIT_SOCIAL_AUTH:
      return {...state, ...action.payload};
    
    case INIT_REGULAR_AUTH:
      return {...state, ...action.payload};
    
    case TOKEN_SET:
      return {...state, ...action.payload};
    
    case RESET_SOCIAL_AUTH:
      return {...state, ...initialState};
    
    case START_LOG_OUT:
      return {};

    default:
      return state;
  }
}

export default authStatusReducer;