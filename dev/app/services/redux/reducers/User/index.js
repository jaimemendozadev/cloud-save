const {APP_INIT} from '../../actions/User';
const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    profile_picture: '',
    drive: null
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
      case APP_INIT:
        return {...state, ...action.payload}
    }
}