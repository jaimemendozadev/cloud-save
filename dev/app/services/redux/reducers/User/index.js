import {APP_INIT, LOG_OUT, START_LOG_OUT} from '../../actions/Auth';
import {UPDATE_USER_DRIVE} from '../../reducers/User';

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    profile_picture: '',
    drive: [],
    social_login: false,
}

const currentUserReducer = (state = initialState, action) => {
    switch(action.type){
      case APP_INIT:
        return {...state, ...action.payload};
    
      case UPDATE_USER_DRIVE:
        return {...state, ...action.payload};
      
      case LOG_OUT:
        return {...state, ...initialState};

      case START_LOG_OUT:
        return {};
      
      default:
        return state;
    }
}

export default currentUserReducer;