import {INIT_SOCIAL_AUTH, INIT_REGULAR_AUTH, TOKEN_SET, RESET_SOCIAL_AUTH} from '../../actions/Auth';

const initialState = {
  SocialAuthInProgress: false,
  RegularAuthInProgress: false,
  tokenSet: false,
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

    default:
      return state;
  }
}

export default authStatusReducer;