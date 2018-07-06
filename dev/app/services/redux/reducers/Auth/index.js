import {INIT_SOCIAL_AUTH} from '../../actions/Auth';

const initialState = {
  authInProgress: false
}

const authStatusReducer = (state = initialState, action) => {
  switch(action.type){
    case INIT_SOCIAL_AUTH:
      console.log('new state is ', {...state, ...action.payload})
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default authStatusReducer;