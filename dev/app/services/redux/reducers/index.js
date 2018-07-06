import { persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authStatusReducer from './Auth'
import currentUserReducer from './User';

const config = {
  key: 'primary',
  storage
}

let rootReducer =  persistCombineReducers(
  config,
  {
    authStatus: authStatusReducer,
    currentUser: currentUserReducer,
  }
)


export default rootReducer;