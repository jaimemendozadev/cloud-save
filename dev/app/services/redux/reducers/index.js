import { persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authStatusReducer from './Auth'

const config = {
  key: 'primary',
  storage
}

let rootReducer =  persistCombineReducers(
  config,
  {authStatus: authStatusReducer}
)


export default rootReducer;