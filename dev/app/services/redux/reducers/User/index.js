import {APP_INIT, START_LOG_OUT} from '../../actions/Auth';
import {UPDATE_USER_DRIVE} from '../../actions/User';

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
        console.log('UPDATE_USER_DRIVE ', {...state, ...action.payload})
        return {...state, ...action.payload};

      case START_LOG_OUT:
        return {};
      
      default:
        return state;
    }
}

export default currentUserReducer;