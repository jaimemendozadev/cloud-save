import {APP_INIT} from '../../actions/Auth';
import {UPDATE_USER_DRIVE} from '../../reducers/User';

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    profile_picture: '',
    drive: null,
    social_login: false,
}

const currentUserReducer = (state = initialState, action) => {
    switch(action.type){
      case APP_INIT:
        return {...state, ...action.payload};
    
      case UPDATE_USER_DRIVE:
        return {...state, ...action.payload};
      
      default:
        return state;
    }
}

export default currentUserReducer;